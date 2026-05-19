const CART_KEY = 'fb_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateAllCartBadges();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const product = getProduct(productId);
  if (!product) return false;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: productId,
      qty: qty,
      name: product.name,
      price: product.price,
      priceDisplay: product.priceDisplay,
      image: product.images[0],
      category: product.category,
    });
  }
  saveCart(cart);
  return true;
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
}

function updateCartQty(productId, qty) {
  if (qty <= 0) { removeFromCart(productId); return; }
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = qty; saveCart(cart); }
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateAllCartBadges();
}

function getCartCount() {
  return getCart().reduce(function(s, i) { return s + i.qty; }, 0);
}

function getCartSubtotal() {
  return getCart().reduce(function(s, i) { return s + (i.price * i.qty); }, 0);
}

function updateAllCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(function(el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showAddedToast(name) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg> Added to cart: <strong>' + name + '</strong> <a href="/cart.html">View cart &rarr;</a>';
  toast.classList.add('visible');
  setTimeout(function() { toast.classList.remove('visible'); }, 3500);
}
