import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";

const PRODUCTS_QUERY = defineQuery(
  `*[_type == "product" && defined(slug.current)] | order(_createdAt desc){ _id, title, slug, price, description, "imageUrl": image.asset->url }`
);

export const dynamic = 'force-dynamic';

export default async function LojaPage() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-16">
        <h1 className="font-rocker text-5xl md:text-7xl uppercase tracking-wider mb-4">Loja</h1>
        <div className="w-24 h-1 bg-accent mb-6"></div>
        <p className="text-zinc-400 max-w-2xl text-lg">Produtos exclusivos para tatuadores e amantes da arte brutal.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative overflow-hidden bg-zinc-900 border-4 border-zinc-800 flex flex-col hover:border-accent transition-colors duration-300"
          >
            {product.imageUrl && (
              <div className="relative w-full aspect-square overflow-hidden bg-zinc-950 border-b-4 border-zinc-800 group-hover:border-accent transition-colors duration-300">
                <Image 
                  src={product.imageUrl} 
                  alt={product.title || "Produto"} 
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            )}
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-rocker text-2xl tracking-wide mb-2">{product.title}</h3>
              <div className="text-accent font-bold text-xl mb-4">R$ {Number(product.price).toFixed(2)}</div>
              
              <div className="text-zinc-400 mb-6 flex-1 text-sm line-clamp-3">
                {product.description && <PortableText value={product.description} />}
              </div>

              <Link 
                href={`/loja/${product.slug?.current}`}
                className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 bg-zinc-800 text-white font-bold tracking-widest uppercase hover:bg-accent hover:text-black transition-colors duration-300"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
