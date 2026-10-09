import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Trash2, Edit2 } from 'lucide-react';

async function deleteProduct(id: string) {
  'use server';
  await prisma.product.delete({ where: { id } });
}

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link
          href="/admin/products/add"
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Add product
        </Link>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="px-6 py-3 text-sm">{product.name}</td>
                  <td className="px-6 py-3 text-sm font-semibold">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        product.stock > 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">{product.category}</td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <form
                        action={async () => {
                          'use server';
                          await deleteProduct(product.id);
                        }}
                        onSubmit={(e) => {
                          if (!confirm('Are you sure?')) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </div>
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
