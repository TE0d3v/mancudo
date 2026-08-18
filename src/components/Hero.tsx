"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
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
          href="/loja"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-bold tracking-widest uppercase border-4 border-accent hover:bg-black transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
            Ver Disponíveis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
  );
}
