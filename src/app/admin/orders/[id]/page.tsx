'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params.id as string;
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(`/api/admin/orders/${orderId}`);
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrder();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found</p>;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Order {order.id.slice(0, 8)}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Order details</h2>
          <p>
            <span className="font-medium">Status:</span> {order.status}
          </p>
          <p>
            <span className="font-medium">Total:</span> ${order.total.toFixed(2)}
          </p>
          <p>
            <span className="font-medium">Date:</span>{' '}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Shipping Address:</span>
            <br />
            {order.shippingAddress}
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Customer</h2>
          <p>
            <span className="font-medium">Email:</span> {order.user.email}
          </p>
          <p>
            <span className="font-medium">Name:</span> {order.user.firstName}{' '}
            {order.user.lastName}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white shadow">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-bold">Order items</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-medium">Product</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item: any) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-3 text-sm">{item.product.name}</td>
                  <td className="px-6 py-3 text-sm">{item.quantity}</td>
                  <td className="px-6 py-3 text-sm">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-3 text-sm font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
