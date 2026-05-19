import { Link } from "wouter";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-16 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <Link href="/" className="font-serif text-2xl tracking-wide text-foreground block">
            FloristBlush
          </Link>
          <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
            Handmade crochet bouquets, plush arrangements, and flower keychains — stitched with love, made to last forever.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg">Shop</h3>
          <ul className="space-y-2 text-muted-foreground flex flex-col items-center md:items-start">
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">Crochet Bouquets</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">Plush Bouquets</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">Keychains</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">Custom Orders</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg">Connect</h3>
          <ul className="space-y-3 text-muted-foreground flex flex-col items-center md:items-start">
            <li>
              <a href="https://instagram.com/floristblush_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={18} />
                <span>@floristblush_</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <span>hello@floristblush.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} FloristBlush. All rights reserved.</p>
      </div>
    </footer>
  );
}
