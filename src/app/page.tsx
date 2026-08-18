import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { sanityFetch } from "@/sanity/live";
import { PRODUCTS_QUERY } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  // Use sanity products if available, otherwise use placeholders to maintain aesthetic during development
  const displayItems = Array.isArray(products) && products.length > 0 ? products : [
    { _id: '1', title: 'Blackwork Skull', slug: 'blackwork-skull', image: null, category: 'Blackwork' },
    { _id: '2', title: 'Trash Polka Eye', slug: 'trash-polka-eye', image: null, category: 'Trash Polka' },
    { _id: '3', title: 'Autoral Brutal', slug: 'autoral-brutal', image: null, category: 'Autoral' }
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start relative overflow-hidden">
        
        {/* Animated Marquee Backgrounds */}
        <div className="fixed top-0 left-0 w-[30vw] md:w-[20vw] h-screen overflow-hidden pointer-events-none z-0">
          <Marquee />
        </div>
        
        <div className="fixed top-0 right-0 w-[30vw] md:w-[20vw] h-screen overflow-hidden pointer-events-none z-0">
          <Marquee reverse />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Featured Work Grid */}
        <div className="z-10 w-full max-w-7xl mx-auto px-6 mt-32 mb-20">
          <div className="flex items-center justify-between mb-10 border-b-4 border-zinc-900 pb-4">
            <h3 className="font-rocker text-4xl md:text-5xl uppercase tracking-wide">Trabalhos Recentes</h3>
            <Link href="/catalogo" className="text-accent font-bold uppercase tracking-wider hover:text-white transition-colors">
              Ver Todos +
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayItems.map((product: unknown, index) => (
                <ProductCard 
                  key={(product as { _id: string })._id} 
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  product={product as any} 
                  index={index} 
                />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
