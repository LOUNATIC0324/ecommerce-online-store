import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-soil">
      <header className="border-b border-green-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf to-orchard text-lg font-bold text-white shadow-soft">
              G
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">Green Basket</p>
              <p className="text-xs uppercase tracking-[0.25em] text-green-700">farm fresh</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#shop" className="transition hover:text-orchard">Shop</a>
            <a href="#featured" className="transition hover:text-orchard">Featured</a>
            <a href="#about" className="transition hover:text-orchard">About</a>
            <a href="#reviews" className="transition hover:text-orchard">Reviews</a>
          </nav>

          <button className="rounded-full bg-orchard px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-green-700">
            Cart (2)
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orchard">
            Fresh this week
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Eat colorful. Eat healthy. Eat fresh.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Seasonal fruits and vegetables sourced from trusted growers and delivered with care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="rounded-full bg-orchard px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-green-700"
            >
              Shop now
            </a>
            <a
              href="#featured"
              className="rounded-full border border-green-200 bg-white px-6 py-3 font-semibold text-orchard transition hover:border-orchard hover:bg-green-50"
            >
              View deals
            </a>
          </div>

          <div className="mt-8 flex gap-8 text-sm text-slate-600">
            <div>
              <p className="text-2xl font-black text-slate-900">2,500+</p>
              <p>happy shoppers</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">12 hrs</p>
              <p>avg. delivery</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">100%</p>
              <p>fresh guarantee</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-12 h-32 w-32 rounded-full bg-yellow-200/70 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-green-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-white p-5 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=80"
              alt="Fresh produce assortment"
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-10 left-10 rounded-2xl bg-white/90 p-4 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-green-700">This week</p>
              <p className="mt-1 text-xl font-black text-slate-900">Organic box</p>
              <p className="text-sm text-slate-700">From $29.90</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900">Browse by category</h2>
          <a href="#shop" className="text-sm font-semibold text-orchard">See all</a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                {category.icon}
              </div>
              <p className="text-xl font-bold text-slate-900">{category.name}</p>
              <p className="mt-1 text-sm text-slate-600">{category.count} fresh picks</p>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orchard">Fresh picks</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Popular fruits & vegetables</h2>
          </div>
          <button className="rounded-full border border-green-200 bg-white px-5 py-2.5 text-sm font-semibold text-orchard transition hover:border-orchard hover:bg-green-50">
            Filter & sort
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="featured" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">Farm box</p>
            <h2 className="mt-4 text-3xl font-black">Build your weekly basket</h2>
            <p className="mt-4 max-w-lg text-slate-300">
              Pick your favorite fruits and vegetables from local farmers. Freshness-first pricing and home delivery included.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-lg font-bold">Family box</p>
              <p className="text-xl font-black text-green-300">$42</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li>• 6 seasonal fruits</li>
              <li>• 8 vegetable picks</li>
              <li>• Free delivery over $40</li>
              <li>• Packed in eco-friendly boxes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Direct from farms', 'We source from growers that care about quality, freshness, and responsible farming.'],
            ['Fast delivery', 'Your groceries are packed same-day and delivered to your doorstep in record time.'],
            ['Sustainable', 'Reusable packaging and fewer food miles help reduce waste and protect the planet.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">✓</div>
              <h3 className="text-xl font-black text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
