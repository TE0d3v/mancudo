"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/lucide-instagram";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black relative border-t-12 border-zinc-900 mt-32 flex flex-col">
      {/* Brutalist Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none flex justify-center opacity-[0.04] z-0">
        <span className="font-rocker text-[25vw] leading-none tracking-tighter uppercase whitespace-nowrap select-none">
          MANCUDO
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-16">

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 2: Contato & Estúdio */}
          <div className="flex flex-col gap-6">
            <h4 className="font-rocker text-2xl text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-1 bg-accent inline-block"></span> ESTÚDIO
            </h4>
            <address className="not-italic flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 group-hover:bg-accent transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-zinc-300 font-bold uppercase tracking-wider">Avenida da Universidade, 2055</span>
                  <span className="text-zinc-500 uppercase tracking-wider text-sm mt-1">Benfica, Fortaleza - CE</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 group-hover:bg-accent transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href="mailto:negrudomancudo@gmail.com" className="text-zinc-300 font-bold uppercase tracking-wider hover:text-accent transition-colors ">negrudomancudo@gmail.com</Link>
                  <span className="text-zinc-500 uppercase tracking-wider text-sm mt-1">Orçamentos e Dúvidas</span>
                </div>
              </div>
            </address>
          </div>

          {/* Col 3: Redes Sociais */}
          <div className="flex flex-col gap-6">
            <h4 className="font-rocker text-2xl text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-1 bg-accent inline-block"></span> CONECTE-SE
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                href="https://www.instagram.com/negrudoo/"
                target="_blank"
                className="group flex items-center justify-between p-4 bg-zinc-900/50 border-2 border-zinc-800 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <InstagramIcon className="w-6 h-6 text-zinc-400 group-hover:text-accent transition-colors" />
                  <span className="text-white font-bold tracking-widest uppercase">Instagram</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>

              <Link
                href="https://wa.me/5585996087336?text=Olá gostaria de fazer um orçamento mancudo!"
                target="_blank"
                className="group flex items-center justify-between p-4 bg-zinc-900/50 border-2 border-zinc-800 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-zinc-400 group-hover:text-accent transition-colors" />
                  <span className="text-white font-bold tracking-widest uppercase">WhatsApp</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="group hidden md:flex items-center justify-center gap-3 text-zinc-400 font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            VOLTAR AO TOPO
            <div className="p-3 bg-zinc-900 group-hover:bg-accent group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs md:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} MANCUDO TATTOO. <br className="md:hidden" />TODOS OS DIREITOS RESERVADOS.
          </p>

          {/* Mobile back to top */}
          <button
            onClick={scrollToTop}
            className="md:hidden flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest hover:text-accent transition-colors text-xs"
          >
            VOLTAR AO TOPO
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
