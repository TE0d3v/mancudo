"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-start relative overflow-hidden">
        
        {/* Animated Marquee Background */}
        <div className="absolute top-1/4 left-0 w-[200vw] pointer-events-none flex opacity-[0.04] z-0 overflow-hidden">
          <h1 className="font-rocker text-[25vw] whitespace-nowrap tracking-tighter animate-marquee">
            MANCUDO • ARTE BRUTAL • TRASH POLKA • BLACKWORK • MANCUDO • ARTE BRUTAL •
          </h1>
        </div>
        
        <div className="absolute top-3/4 left-0 w-[200vw] pointer-events-none flex opacity-[0.04] z-0 overflow-hidden">
          <h1 className="font-rocker text-[25vw] whitespace-nowrap tracking-tighter animate-marquee" style={{animationDirection: "reverse"}}>
            TRASH POLKA • MANCUDO • BLACKWORK • ARTE BRUTAL • TRASH POLKA • MANCUDO • 
          </h1>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 flex flex-col items-center text-center px-4 mt-20 md:mt-32 w-full max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-rocker text-6xl md:text-8xl lg:text-[10rem] mb-6 tracking-wide text-white uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] leading-none"
          >
            Arte <span className="text-accent">Brutal</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-zinc-400 text-lg md:text-2xl mb-12 font-bold tracking-tight"
          >
            Tatuagem não é adorno, é cicatriz intencional. Especialista em blackwork, trash polka e designs autorais intensos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link 
              href="/catalogo"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold tracking-widest uppercase border-4 border-accent hover:bg-black transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                Ver Trabalhos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/cuidados"
              className="group relative inline-flex items-center justify-center px-10 py-5 border-4 border-zinc-800 text-zinc-300 font-bold tracking-widest uppercase hover:border-accent hover:text-white transition-colors duration-300"
            >
              Guia de Cicatrização
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Work Grid Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="z-10 w-full max-w-7xl mx-auto px-6 mt-32 mb-20"
        >
          <div className="flex items-center justify-between mb-10 border-b-4 border-zinc-900 pb-4">
            <h3 className="font-rocker text-4xl md:text-5xl uppercase tracking-wide">Trabalhos Recentes</h3>
            <Link href="/catalogo" className="text-accent font-bold uppercase tracking-wider hover:text-white transition-colors">
              Ver Todos +
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder 1 */}
            <div className="relative aspect-[3/4] border-4 border-zinc-800 hover:border-accent transition-colors duration-300 group overflow-hidden">
              <Image 
                src="/tattoo1.jpg" 
                alt="Blackwork Tattoo" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-rocker text-2xl text-accent border-2 border-accent px-4 py-2">BLACKWORK</span>
              </div>
            </div>
            
            {/* Placeholder 2 */}
            <div className="relative aspect-[3/4] border-4 border-zinc-800 hover:border-accent transition-colors duration-300 group overflow-hidden md:translate-y-10">
              <Image 
                src="/tattoo2.jpg" 
                alt="Trash Polka Skull" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-rocker text-2xl text-accent border-2 border-accent px-4 py-2">TRASH POLKA</span>
              </div>
            </div>
            
            {/* Placeholder 3 */}
            <div className="relative aspect-[3/4] border-4 border-zinc-800 hover:border-accent transition-colors duration-300 group overflow-hidden">
              <Image 
                src="/tattoo3.jpg" 
                alt="Brutalist Abstract" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-rocker text-2xl text-accent border-2 border-accent px-4 py-2">AUTORAL</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
