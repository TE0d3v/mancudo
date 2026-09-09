import { PortableText, defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const PRODUCT_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]{ _id, title, price, description, "imageUrl": image.asset->url }`
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

  const whatsappNumber = "5585996087336";
  const message = product.imageUrl 
    ? `Olá! Gostaria de comprar a arte: *${product.title}*\n\nImagem: ${product.imageUrl}`
    : `Olá! Gostaria de comprar a arte: *${product.title}*`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Link href="/loja" className="inline-flex items-center text-zinc-400 hover:text-accent focus-visible:outline-none focus-visible:text-accent mb-8 md:mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para a loja
      </Link>

      <article className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center shadow-xl">
        {product.imageUrl && (
          <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
            <div className="border-4 border-zinc-800 bg-zinc-950 flex items-center justify-center overflow-hidden w-full max-w-md md:max-w-none">
              <Image 
                src={product.imageUrl} 
                alt={product.title || "Produto"} 
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
                className="object-contain"
              />
            </div>
          </div>
        )}
        
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="font-rocker text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 md:mb-6">{product.title}</h1>
          <div className="text-accent font-bold text-3xl md:text-4xl mb-6 md:mb-8">R$ {Number(product.price).toFixed(2)}</div>
          
          <div className="text-zinc-300 text-2xl md:text-3xl prose prose-invert prose-p:leading-relaxed max-w-none mb-8 md:mb-10">
            {product.description && <PortableText value={product.description} />}
          </div>

          <div>
            <Link 
              href={whatsappUrl}
              target="_blank"
              className="inline-flex justify-center items-center w-full md:w-auto px-10 py-4 md:px-12 md:py-5 bg-accent text-black text-xl md:text-2xl font-bold tracking-widest uppercase hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 transition-colors duration-300"
            >
              Comprar Agora
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
