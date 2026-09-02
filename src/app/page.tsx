import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { sanityFetch } from "@/sanity/live";
import { LATEST_6_PRODUCTS_QUERY } from "@/sanity/queries";
import Link from "next/link";

type ProductData = {
  _id: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  category?: string;
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: latestProducts } = await sanityFetch({ query: LATEST_6_PRODUCTS_QUERY });
  const productsList = (latestProducts as ProductData[]) || [];

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-vt323">
      <div className="flex flex-1 w-full flex-col items-center justify-start relative overflow-hidden">
        
        {/* Animated Marquee Backgrounds */}
        <div className="fixed top-0 left-0 w-screen md:w-[45vw] h-screen overflow-hidden pointer-events-none z-0">
          <Marquee />
        </div>
        
        <div className="fixed top-0 right-0 hidden md:block w-screen md:w-[45vw] h-screen overflow-hidden pointer-events-none z-0">
          <Marquee reverse />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Featured Work Grid */}
        <div className="z-10 w-full max-w-7xl mx-auto px-6 mt-32 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 border-b-4 border-zinc-900 pb-4">
            <h3 className="font-rocker text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">Trabalhos Disponiveis</h3>
            <Link href="/loja" className="text-accent font-bold uppercase tracking-wider hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors">
              Ver Todos +
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((product: ProductData) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
