import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.email !== 'admin@shophub.com') {
    redirect('/login');
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <aside className="w-64 bg-slate-900 text-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="space-y-2 px-4 py-6">
          <Link
            href="/admin"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Orders
          </Link>
          <Link
            href="/admin/users"
            className="block rounded-lg px-4 py-2 hover:bg-slate-800"
          >
            Users
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="bg-white shadow">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold">ShopHub Admin</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Back to store
            </Link>
          </div>
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
