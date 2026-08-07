import { PortableText, defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PRODUCT_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]{ _id, title, price, description }`
);

const options = { next: { revalidate: 30 } };

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_QUERY, { slug }, options);

  if (!product) return notFound();

  return (
    <div className="flex flex-col flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/loja" className="inline-flex items-center text-zinc-400 hover:text-accent mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para a loja
      </Link>

      <article className="bg-zinc-900 border border-zinc-800 p-8 md:p-12">
        <h1 className="font-rocker text-4xl md:text-6xl tracking-wide mb-6">{product.title}</h1>
        <div className="text-accent font-bold text-3xl mb-8">R$ {Number(product.price).toFixed(2)}</div>
        
        <div className="text-zinc-300 text-lg prose prose-invert prose-p:leading-relaxed max-w-none mb-12">
          {product.description && <PortableText value={product.description} />}
        </div>

        <button className="w-full md:w-auto px-12 py-5 bg-accent text-black font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
          Comprar Agora
        </button>
      </article>
    </div>
  );
}
