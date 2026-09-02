"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/lucide-instagram";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black relative border-t border-zinc-900 mt-8 flex flex-col">
      {/* Brutalist Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none flex justify-center opacity-[0.04] z-0">
        <span className="font-rocker text-[15vw] leading-none tracking-tighter uppercase whitespace-nowrap select-none">
          MANCUDO
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Contato & Estúdio */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <h4 className="font-rocker text-xl text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-6 h-1 bg-accent inline-block"></span> ESTÚDIO
            </h4>
            <address className="not-italic flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 group-hover:bg-accent transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-zinc-300 font-bold uppercase tracking-wider text-sm">Avenida da Universidade, 2055</span>
                  <span className="text-zinc-500 uppercase tracking-wider text-xs mt-1">Benfica, Fortaleza - CE</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 group-hover:bg-accent transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href="mailto:negrudomancudo@gmail.com" className="text-zinc-300 font-bold uppercase tracking-wider hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors text-sm">negrudomancudo@gmail.com</Link>
                  <span className="text-zinc-500 uppercase tracking-wider text-xs mt-1">Orçamentos e Dúvidas</span>
                </div>
              </div>
            </address>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-5">
            <h4 className="font-rocker text-xl text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-6 h-1 bg-accent inline-block"></span> CONECTE-SE
            </h4>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                href="https://www.instagram.com/negrudoo/"
                target="_blank"
                className="group flex items-center justify-between p-3 bg-zinc-900/50 border-2 border-zinc-800 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:border-accent focus-visible:bg-accent/10 transition-all duration-300 flex-1"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-5 h-5 text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors" />
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Instagram</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent group-focus-visible:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 transition-all" />
              </Link>

              <Link
                href="https://wa.me/5585996087336?text=Olá gostaria de fazer um orçamento mancudo!"
                target="_blank"
                className="group flex items-center justify-between p-3 bg-zinc-900/50 border-2 border-zinc-800 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:border-accent focus-visible:bg-accent/10 transition-all duration-300 flex-1"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors" />
                  <span className="text-white font-bold tracking-widest uppercase text-sm">WhatsApp</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent group-focus-visible:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} MANCUDO TATTOO. <br className="sm:hidden" />TODOS OS DIREITOS RESERVADOS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors text-xs"
          >
            VOLTAR AO TOPO
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
