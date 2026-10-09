import prisma from '@/lib/prisma';

export default async function AdminDashboard() {
  const totalProducts = await prisma.product.count();
  const totalOrders = await prisma.order.count();
  const totalUsers = await prisma.user.count();
  const totalRevenue = await prisma.order.aggregate({
    _sum: { total: true },
  });

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  });

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-slate-600">Total Products</h3>
          <p className="mt-2 text-3xl font-bold">{totalProducts}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-slate-600">Total Orders</h3>
          <p className="mt-2 text-3xl font-bold">{totalOrders}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-slate-600">Total Users</h3>
          <p className="mt-2 text-3xl font-bold">{totalUsers}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-slate-600">Total Revenue</h3>
          <p className="mt-2 text-3xl font-bold">
            ${(totalRevenue._sum.total || 0).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-bold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-medium">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-6 py-3 text-sm">{order.id.slice(0, 8)}</td>
                  <td className="px-6 py-3 text-sm">{order.user.email}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
