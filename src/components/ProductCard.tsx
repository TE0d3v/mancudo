import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    slug: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    category?: string;
  };
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Translate index into layout position to keep the brutalist zig-zag pattern
  const isOffset = index % 3 === 1;

  return (
    <Link href={`/catalogo/${product.slug}`} className={`block ${isOffset ? 'md:translate-y-10' : ''}`}>
      <div className="relative aspect-3/4 border-4 border-zinc-800 hover:border-accent transition-colors duration-300 group overflow-hidden">
        {product.image ? (
          <Image 
            src={urlFor(product.image).url()} 
            alt={product.title} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
            <span className="text-zinc-700 font-rocker text-2xl">SEM IMAGEM</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
          {product.category && (
            <span className="font-rocker text-2xl text-accent border-2 border-accent px-4 py-2 uppercase">
              {product.category}
            </span>
          )}
          <span className="text-white font-bold tracking-widest uppercase">{product.title}</span>
        </div>
      </div>
    </Link>
  );
}
