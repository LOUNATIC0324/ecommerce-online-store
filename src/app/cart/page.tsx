import ProductCard from '@/components/ProductCard';

const products = [
  { id: '1', name: 'Wireless Headphones', price: 129.99, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80' },
  { id: '2', name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80' },
  { id: '3', name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80' },
  { id: '4', name: 'Power Bank', price: 59.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80' },
  { id: '5', name: 'Mechanical Keyboard', price: 109.99, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80' },
  { id: '6', name: 'Laptop Stand', price: 49.99, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
