import { Link } from "wouter";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-16 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <Link href="/" className="font-serif text-2xl tracking-wide text-foreground block">
            FloristBlush
          </Link>
          <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
            Handcrafted with love, bloomed just for you. Delicate, personal floral arrangements for life's beautiful moments.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg">Links</h3>
          <ul className="space-y-2 text-muted-foreground flex flex-col items-center md:items-start">
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">Shop Collections</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
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
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              <span>San Francisco, CA</span>
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
