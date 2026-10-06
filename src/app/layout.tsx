import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating = 4.5,
  reviews = 120,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/products/${id}`}>
        <div className="relative h-56 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold text-lg text-slate-800 hover:text-blue-600">{name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-2 text-yellow-400">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={14} fill={idx < Math.round(rating) ? 'currentColor' : 'none'} />
          ))}
          <span className="text-sm text-slate-500 ml-2">({reviews})</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">${price.toFixed(2)}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
