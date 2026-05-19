/* ── Init ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  updateAllCartBadges();
  initNavbar();
  initScrollAnimations();
  initShopFilters();
  initProductPage();
  initCartPage();
  initCopyrightYear();
});

/* ── Navbar ──────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function updateScroll() {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // Active link
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(function(link) {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && href !== '' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
}

/* ── Scroll animations ───────────────────── */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  els.forEach(function(el) { obs.observe(el); });
}

/* ── Shop filter tabs ────────────────────── */
function initShopFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card[data-category]');
  if (!btns.length) return;

  // Apply URL param filter
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const target = document.querySelector('.filter-btn[data-filter="' + filterParam + '"]');
    if (target) {
      btns.forEach(function(b) { b.classList.remove('active'); });
      target.classList.add('active');
      applyFilter(filterParam, cards);
    }
  }

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter, cards);
    });
  });
}

function applyFilter(cat, cards) {
  cards.forEach(function(card) {
    if (cat === 'all' || card.dataset.category === cat) {
      card.classList.remove('product-hidden');
    } else {
      card.classList.add('product-hidden');
    }
  });
}

/* ── Add to cart (shop grid) ─────────────── */
function addToCartBtn(productId) {
  const ok = addToCart(productId, 1);
  if (ok) {
    const p = getProduct(productId);
    if (p) showAddedToast(p.name);
  }
}

/* ── Product detail page ─────────────────── */
function initProductPage() {
  const page = document.getElementById('productPage');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = id ? getProduct(id) : null;

  if (!product) {
    page.innerHTML = '<div class="container" style="padding:8rem 1.5rem;text-align:center;"><h2>Product not found.</h2><a href="/shop.html" class="btn btn-primary" style="margin-top:1.5rem;">Back to Shop</a></div>';
    return;
  }

  document.title = product.name + ' — FloristBlush';

  // Gallery
  let galleryHtml = '<div class="main-image-wrap"><img id="mainImg" src="' + product.images[0] + '" alt="' + product.name + '" /></div>';
  galleryHtml += '<div class="thumb-row">';
  product.images.forEach(function(img, i) {
    galleryHtml += '<img class="thumb' + (i === 0 ? ' active' : '') + '" src="' + img + '" alt="' + product.name + ' view ' + (i+1) + '" onclick="switchImage(this, \'' + img + '\')" />';
  });
  galleryHtml += '</div>';
  galleryHtml += '<div class="video-block" onclick="openVideoModal()"><div class="video-play-btn"><svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div><span>Watch it being made</span></div>';

  // Colors
  let colorsHtml = '<div class="option-group"><div class="option-label">Color</div><div class="color-swatches">';
  product.colors.forEach(function(c, i) {
    colorsHtml += '<button class="swatch' + (i === 0 ? ' active' : '') + '" style="background:' + c + ';" title="' + product.colorNames[i] + '" onclick="selectSwatch(this)"></button>';
  });
  colorsHtml += '</div></div>';

  // Build page
  page.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-gallery">${galleryHtml}</div>
      <div class="product-detail-info">
        <nav class="breadcrumb"><a href="/">Home</a> <span>/</span> <a href="/shop.html">Shop</a> <span>/</span> <span>${product.name}</span></nav>
        ${product.tag ? '<span class="product-badge">' + product.tag + '</span>' : ''}
        <h1 class="serif product-detail-name">${product.name}</h1>
        <div class="product-detail-price">${product.priceDisplay}</div>
        <p class="product-detail-desc">${product.description}</p>
        ${colorsHtml}
        <div class="option-group">
          <div class="option-label">Quantity</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">&#8722;</button>
            <span id="qtyVal">1</span>
            <button class="qty-btn" onclick="changeQty(1)">&#43;</button>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-large" onclick="addToCartFromPage('${product.id}')">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5l3 3 3-3zm-3 11c-1.1 0-1.99.9-1.99 2S5.9 24 7 24s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 24 17 24s2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            Add to Cart
          </button>
          <a href="/contact.html" class="btn btn-outline btn-large">Order Now</a>
          <button class="btn btn-ghost btn-icon" onclick="shareProduct('${product.name}')" title="Share">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
          </button>
        </div>
      </div>
    </div>`;

  // Related products
  const relatedEl = document.getElementById('relatedProducts');
  if (relatedEl && product.related) {
    const related = getProductsByIds(product.related).slice(0, 4);
    relatedEl.innerHTML = related.map(function(p) {
      return renderProductCard(p);
    }).join('');
  }
}

function switchImage(thumb, src) {
  document.querySelectorAll('.thumb').forEach(function(t) { t.classList.remove('active'); });
  thumb.classList.add('active');
  const main = document.getElementById('mainImg');
  if (main) main.src = src;
}

function selectSwatch(btn) {
  document.querySelectorAll('.swatch').forEach(function(s) { s.classList.remove('active'); });
  btn.classList.add('active');
}

var currentQty = 1;
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  var el = document.getElementById('qtyVal');
  if (el) el.textContent = currentQty;
}

function addToCartFromPage(productId) {
  const ok = addToCart(productId, currentQty);
  if (ok) {
    const p = getProduct(productId);
    if (p) showAddedToast(p.name);
  }
}

function shareProduct(name) {
  if (navigator.share) {
    navigator.share({ title: name + ' — FloristBlush', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(function() {
      showAddedToast('Link copied to clipboard!');
    });
  }
}

function openVideoModal() {
  var m = document.getElementById('videoModal');
  if (m) m.style.display = 'flex';
}
function closeVideoModal() {
  var m = document.getElementById('videoModal');
  if (m) m.style.display = 'none';
}

/* ── Cart page ───────────────────────────── */
function initCartPage() {
  const page = document.getElementById('cartPage');
  if (!page) return;
  renderCartPage();
}

function renderCartPage() {
  const cartItemsEl = document.getElementById('cartItemsList');
  const summaryEl = document.getElementById('cartSummary');
  const emptyEl = document.getElementById('cartEmpty');
  const cart = getCart();

  if (!cart.length) {
    if (cartItemsEl) cartItemsEl.innerHTML = '';
    if (summaryEl) summaryEl.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (summaryEl) summaryEl.style.display = 'block';

  if (cartItemsEl) {
    cartItemsEl.innerHTML = cart.map(function(item) {
      return `
        <div class="cart-item" id="cart-item-${item.id}">
          <a href="/product.html?id=${item.id}" class="cart-item-img">
            <img src="${item.image}" alt="${item.name}" />
          </a>
          <div class="cart-item-info">
            <a href="/product.html?id=${item.id}" class="cart-item-name serif">${item.name}</a>
            <div class="cart-item-price">$${item.price} each</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="cartChangeQty('${item.id}', ${item.qty - 1})">&#8722;</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="cartChangeQty('${item.id}', ${item.qty + 1})">&#43;</button>
              </div>
              <button class="remove-btn" onclick="cartRemove('${item.id}')">Remove</button>
            </div>
          </div>
          <div class="cart-item-total">$${item.price * item.qty}</div>
        </div>`;
    }).join('');
  }

  const subtotal = getCartSubtotal();
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = '$' + subtotal;
  if (totalEl) totalEl.textContent = '$' + subtotal;
}

function cartChangeQty(productId, qty) {
  updateCartQty(productId, qty);
  renderCartPage();
}

function cartRemove(productId) {
  removeFromCart(productId);
  renderCartPage();
}

function proceedToCheckout() {
  const form = document.getElementById('checkoutSection');
  if (form) {
    form.style.display = 'block';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function submitOrder(e) {
  e.preventDefault();
  const section = document.getElementById('checkoutSection');
  const confirm = document.getElementById('orderConfirmation');
  if (section) section.style.display = 'none';
  if (confirm) confirm.style.display = 'flex';
  clearCart();
  renderCartPage();
}

/* ── Render product card HTML ────────────── */
function renderProductCard(p) {
  return `
    <div class="product-card fade-up" data-category="${p.category}">
      <a href="/product.html?id=${p.id}" class="product-img-link">
        <div class="product-img">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
          ${p.tag ? '<span class="product-tag">' + p.tag + '</span>' : ''}
        </div>
      </a>
      <div class="product-info">
        <div class="product-name-row">
          <a href="/product.html?id=${p.id}" class="product-name serif">${p.name}</a>
          <span class="product-price">${p.priceDisplay}</span>
        </div>
        <p class="product-desc">${p.shortDesc}</p>
        <div class="product-card-actions">
          <button class="btn btn-outline btn-sm" onclick="addToCartBtn('${p.id}')">Add to Cart</button>
          <a href="/product.html?id=${p.id}" class="btn btn-ghost btn-sm">View</a>
        </div>
      </div>
    </div>`;
}

/* ── Misc ────────────────────────────────── */
function initCopyrightYear() {
  document.querySelectorAll('.copyright-year').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });
}
