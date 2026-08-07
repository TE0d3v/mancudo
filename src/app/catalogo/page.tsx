"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  { id: 1, title: "Skull & Snake", category: "Blackwork", img: "https://images.unsplash.com/photo-1590246814883-578ae62d7c57?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Abstract Chaos", category: "Trash Polka", img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Dark Angel", category: "Realism", img: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Geometric Sleeve", category: "Blackwork", img: "https://images.unsplash.com/photo-1568283582496-b333671e6264?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Bio-Mech", category: "Custom", img: "https://images.unsplash.com/photo-1590246815335-5e6e3c1a8dc4?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Lettering", category: "Script", img: "https://images.unsplash.com/photo-1562967916-eb822210b78e?auto=format&fit=crop&q=80&w=800" }
];

export default function Catalogo() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="font-rocker text-5xl md:text-7xl uppercase tracking-wider mb-4">Catálogo</h1>
        <div className="w-24 h-1 bg-accent mb-6"></div>
        <p className="text-zinc-400 max-w-2xl text-lg">Um acervo de dor e tinta. Trabalhos recentes e disponíveis.</p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 break-inside-avoid"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image 
                src={work.img}
                alt={work.title}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent font-bold text-sm tracking-widest uppercase mb-1">{work.category}</span>
                <h3 className="text-white font-rocker text-2xl tracking-wide">{work.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}
