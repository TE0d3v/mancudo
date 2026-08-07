"use client";

import { motion } from "framer-motion";
import { Skull, Droplet, Sun, Hand, Flame, ShieldAlert, BadgeCheck } from "lucide-react";

const dos = [
  { icon: Droplet, text: "Lave com sabonete neutro (sem perfume) 2 a 3 vezes ao dia." },
  { icon: ShieldAlert, text: "Mantenha a tatuagem hidratada, mas sem exagero (camada muito fina de pomada)." },
  { icon: BadgeCheck, text: "Deixe respirar. Roupas leves e de algodão são essenciais." },
];

const donts = [
  { icon: Hand, text: "NÃO COCE, NÃO ARRANQUE A CASCA. Se coçar, bata levemente." },
  { icon: Sun, text: "Zero sol por pelo menos 15 dias. Depois, protetor solar sempre." },
  { icon: Flame, text: "Sem praia, piscina, sauna ou mar por 30 dias. É uma ferida aberta." },
  { icon: Skull, text: "Evite alimentos gordurosos (carne de porco, frituras) nos primeiros dias." },
];

export default function Cuidados() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-rocker text-5xl md:text-7xl uppercase tracking-wider mb-4 text-white">Manual de Sobrevivência</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          A tatuagem é 50% meu trabalho, 50% o seu cuidado. 
          Siga estas regras ou estrague a arte.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        {/* O que FAZER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900 border-2 border-zinc-800 p-8 relative overflow-hidden group hover:border-green-800 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BadgeCheck size={120} />
          </div>
          <h2 className="font-rocker text-3xl mb-8 text-green-500 uppercase tracking-wide">O Que Fazer</h2>
          
          <ul className="space-y-6 relative z-10">
            {dos.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <item.icon className="text-green-500 mt-1 shrink-0" size={24} />
                <span className="text-zinc-300 text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* O que NÃO FAZER */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black border-2 border-accent/50 p-8 relative overflow-hidden group hover:border-accent transition-colors shadow-[0_0_30px_rgba(234,88,12,0.1)]"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Skull size={120} className="text-accent" />
          </div>
          <h2 className="font-rocker text-3xl mb-8 text-accent uppercase tracking-wide">O Que Não Fazer</h2>
          
          <ul className="space-y-6 relative z-10">
            {donts.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <item.icon className="text-accent mt-1 shrink-0" size={24} />
                <span className="text-zinc-300 text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
      
    </div>
  );
}
