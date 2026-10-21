type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  rating: number;
  badge: string;
  origin: string;
  image: string;
  description: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orchard backdrop-blur-sm">
          {product.badge}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
            {product.category}
          </span>
          <span className="text-sm font-bold text-yellow-500">⭐ {product.rating}</span>
        </div>

        <h3 className="text-xl font-black text-slate-900">{product.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{product.description}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>{product.origin}</span>
          <span>{product.unit}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
            <p className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</p>
          </div>
          <button className="rounded-full bg-orchard px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
