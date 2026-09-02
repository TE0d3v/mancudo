"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Sobre() {
  const [secretKeys, setSecretKeys] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [isGlitched, setIsGlitched] = useState(false);
  const SECRET_WORD = "fortal";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSecretKeys((prev) => {
        const newKeys = (prev + e.key).toLowerCase();
        if (newKeys.includes(SECRET_WORD)) {
          setShowVideo(true);
          return "";
        }
        return newKeys.slice(-SECRET_WORD.length);
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerGlitch = () => {
    setIsGlitched(true);
    setTimeout(() => {
      setIsGlitched(false);
    }, 1500);
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-4/5 w-full max-w-md mx-auto lg:max-w-none border-4 border-zinc-900 overflow-hidden"
        >
          {/* Placeholder image that looks gritty */}
          <Image 
            src="/about.png"
            alt="Mancudo"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 border-10 border-black/50 pointer-events-none"></div>
        </motion.div>

        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-rocker text-5xl sm:text-6xl md:text-8xl mb-2 tracking-wide uppercase text-white drop-shadow-md">
            Mancudo
          </h1>
          <h2 className="text-accent text-3xl font-bold tracking-[0.2em] uppercase mb-8">
            Tatuador & Artista
          </h2>

          <div className="space-y-6 text-zinc-400 text-4xl leading-relaxed mb-10 border-l-2 border-accent pl-6 font-vt323">
            <p>
              Tatuagem não é sobre moda, é sobre marcar um momento na pele para a eternidade.
              Com mais de 3 anos de agulha e tinta preta correndo nas veias, meu trabalho é 
              focado em criar designs agressivos e únicos.
            </p>
            <p>
              Especialista em te deixar MANCUDO. Se você quer algo delicado e 
              imperceptível, procure outro lugar. Minha arte é brutal e feita para ser vista.
            </p>
          </div>


        </motion.div>

      </div>

      {/* Seção Quem Tá Riscando */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        
        {/* Texto 2 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center order-2 lg:order-1"
        >
          <h2 className="font-rocker text-4xl sm:text-5xl md:text-7xl mb-8 tracking-wide uppercase text-white drop-shadow-md">
            QUEM TÁ RISCANDO?
          </h2>

          <div className="space-y-6 text-zinc-400 text-4xl leading-relaxed mb-10 border-l-2 border-accent pl-6 font-vt323">
            <p>
              Sou o FELIPE , o ADM por trás da tatu mancuda.
              Sou cria do famoso 085 ( FORTAL) . Nunca pisei em faculdade de artes e nunca fiz curso pra aprender a desenhar. Meu estilo nasceu das minhas vivências, frustrações e etc . 
            </p>
            <p>
              Foi na rua daqui que peguei a referência do que faço hoje: picho no muro, gibi, adesivo colado em poste e danças urbanas .
            </p>
          </div>
        </motion.div>

        {/* Imagem 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-4/5 w-full max-w-md mx-auto lg:max-w-none border-4 border-zinc-900 overflow-hidden order-1 lg:order-2 cursor-pointer group"
          onDoubleClick={triggerGlitch}
        >
          {isGlitched && (
            <>
              {/* Noise extra */}
              <div className="absolute inset-0 z-20 pointer-events-none mix-blend-difference bg-noise opacity-80 animate-pulse"></div>
              
              {/* Camadas do Glitch (Cortes na imagem original) */}
              <Image 
                src="/foto-crianca.png"
                alt="Glitch 1"
                fill
                className="object-cover glitch-layer-1 z-10 scale-105"
              />
              <Image 
                src="/foto-crianca.png"
                alt="Glitch 2"
                fill
                className="object-cover glitch-layer-2 z-10 scale-105"
              />
            </>
          )}
          
          <Image 
            src={isGlitched ? "/foto-crianca.png" : "/about2.png"}
            alt="Felipe"
            fill
            className={`object-cover transition-all duration-300 scale-105 hover:scale-100 ${
              isGlitched ? "grayscale-0 scale-100 opacity-90" : "grayscale hover:grayscale-0"
            }`}
          />
          <div className="absolute inset-0 border-10 border-black/50 pointer-events-none z-30"></div>
        </motion.div>

      </div>

      {/* Video Modal Easter Egg */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm cursor-pointer" 
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-sm aspect-9/16 md:max-w-md border-4 border-zinc-900 overflow-hidden shadow-2xl shadow-accent/20" 
            onClick={(e) => {
              setShowVideo(false);
              e.stopPropagation();
            }}
          >
            {/* Mensagem discreta no topo */}
            <div className="absolute top-4 right-4 z-20">
              <button 
                className="text-white font-vt323 text-xl hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-black/50 px-3 py-1 border border-zinc-800 backdrop-blur-md transition-colors uppercase tracking-widest"
              >
                [ FECHAR ]
              </button>
            </div>

            <video 
              src="/video-danca.mp4" 
              autoPlay 
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
            
            {/* Overlay sutil para manter a vibe do site */}
            <div className="absolute inset-0 pointer-events-none bg-noise opacity-20 mix-blend-overlay"></div>
          </div>
        </div>
      )}
    </div>
  );
}
