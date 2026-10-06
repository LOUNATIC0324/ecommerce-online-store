import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  { id: '1', name: 'Wireless Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80' },
  { id: '2', name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80' },
  { id: '3', name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80' },
  { id: '4', name: 'Power Bank', price: 59.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80' },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-8 py-16">
        <div className="max-w-2xl">
          <p className="text-blue-100 uppercase tracking-[0.2em] text-xs font-semibold">New arrivals</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">Shop smarter, live better.</h1>
          <p className="mt-4 text-lg text-blue-100">
            Discover premium tech, essentials, and lifestyle products curated for modern life.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link href="/products" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-50">
              Shop now
            </Link>
            <Link href="/about" className="border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured products</h2>
          <Link href="/products" className="text-blue-600 font-medium hover:text-blue-700">View all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
