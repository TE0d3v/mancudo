import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { sanityFetch } from "@/sanity/live";
import { LATEST_6_PRODUCTS_QUERY } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";
import muralImage from "../../public/muralmancudo.png";

type ProductData = {
  _id: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  category?: string;
};

export const revalidate = 60;

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

        {/* Mural Section */}
        {/* <div className="w-full max-w-9xl mx-auto mt-20 md:mt-32">
          <div className="relative w-full overflow-hidden flex">
            <Image 
              src={muralImage}
              alt="Mural Mancudo"
              sizes="(max-width: 1980px) 100vw, 1280px"
              style={{ width: '100%', height: '1000px', display: 'block', border: 'none', outline: 'none' }}
              className="grayscale hover:grayscale-0 transition-all duration-900"
            />
          </div>
        </div> */}

        {/* Featured Work Grid */}
        <div className="z-10 w-full max-w-7xl mx-auto px-6 mt-20 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 border-b-4 border-zinc-900 pb-4">
            <h3 className="font-rocker text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">Trabalhos Disponiveis</h3>
            <Link href="/loja" className="text-accent font-bold uppercase tracking-wider hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors">
              Ver Todos +
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {productsList.map((product: ProductData) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
