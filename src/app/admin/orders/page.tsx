import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
      items: { include: { product: true } },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Orders</h1>

      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-medium">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Items</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Total</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-6 py-3 text-sm font-mono">{order.id.slice(0, 8)}</td>
                  <td className="px-6 py-3 text-sm">{order.user.email}</td>
                  <td className="px-6 py-3 text-sm">{order.items.length}</td>
                  <td className="px-6 py-3 text-sm font-semibold">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {order.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View
                    </Link>
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
