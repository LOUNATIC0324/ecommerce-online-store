import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/store/useCart';

export default function Navbar() {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ShopHub
          </Link>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/products" className="hover:text-blue-300">Shop</Link>
            <Link href="/about" className="hover:text-blue-300">About</Link>
            <Link href="/contact" className="hover:text-blue-300">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/account" className="hover:text-blue-300">
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative hover:text-blue-300">
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold">
                  {items.length}
                </span>
              )}
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 text-sm">
            <Link href="/" className="block hover:text-blue-300">Home</Link>
            <Link href="/products" className="block hover:text-blue-300">Shop</Link>
            <Link href="/about" className="block hover:text-blue-300">About</Link>
            <Link href="/contact" className="block hover:text-blue-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
