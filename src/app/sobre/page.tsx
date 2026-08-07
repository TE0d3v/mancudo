"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sobre() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border-4 border-zinc-900 overflow-hidden"
        >
          {/* Placeholder image that looks gritty */}
          <Image 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1000"
            alt="Mancudo"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 border-[10px] border-black/50 pointer-events-none"></div>
        </motion.div>

        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-rocker text-6xl md:text-8xl mb-2 tracking-wide uppercase text-white drop-shadow-md">
            Mancudo
          </h1>
          <h2 className="text-accent text-xl font-bold tracking-[0.2em] uppercase mb-8">
            Tatuador & Artista
          </h2>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10 border-l-2 border-accent pl-6">
            <p>
              Tatuagem não é sobre moda, é sobre marcar um momento na pele para a eternidade.
              Com mais de 10 anos de agulha e tinta preta correndo nas veias, meu trabalho é 
              focado em criar designs agressivos e únicos.
            </p>
            <p>
              Especialista em Blackwork, Trash Polka e Realismo Dark. Se você quer algo delicado e 
              imperceptível, procure outro lugar. Minha arte é brutal e feita para ser vista.
            </p>
          </div>

          {/* Socials / Contato rápido */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 border border-zinc-700 hover:border-accent hover:bg-accent hover:text-black transition-all font-bold tracking-widest uppercase text-sm"
            >
              Instagram
            </a>
            <a 
              href="mailto:contato@mancudo.com" 
              className="px-6 py-3 border border-zinc-700 hover:border-accent hover:bg-accent hover:text-black transition-all font-bold tracking-widest uppercase text-sm"
            >
              Email
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
