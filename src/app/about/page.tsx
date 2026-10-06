'use client';

import Link from 'next/link';
import { useCart } from '@/store/useCart';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-slate-600 mb-6">Browse our products and add something you love.</p>
        <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
          {items.map((item) => (
            <div key={item.productId} className="flex items-center justify-between border-b py-5">
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-slate-500">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
                <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.productId)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="space-y-3 text-slate-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
