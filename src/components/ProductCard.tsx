import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">ShopHub</h3>
            <p className="text-sm text-slate-300">
              Discover great products that make life easier and more exciting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/products">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Care</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/returns">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow us</h4>
            <div className="flex gap-3 text-slate-300">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
          © 2024 ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
