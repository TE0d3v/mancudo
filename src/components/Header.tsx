"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoLoop from "./LogoLoop";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row w-full bg-black relative z-50">
      <div className="flex items-center justify-between w-full h-24 px-6 md:px-10">
        <div className="flex items-center flex-1 h-full py-2 overflow-hidden mr-4">
          <LogoLoop
            logos={[
              
              {
                node: (
                  <Link href="/" className="flex items-center h-16 group hover:opacity-80 transition-opacity relative aspect-[3/1]">
                    <Image
                      src="/logomancuda.svg"
                      alt="Mancudo logo"
                      fill
                      priority
                      className="object-contain invert"
                    />
                  </Link>
                )
              }
            ]}
            speed={40}
            direction="right"
            logoHeight={64}
            gap={1400}
            fadeOut={true}
            fadeOutColor="#000000"
            className="w-full h-full flex items-center"
          />

        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="hidden md:flex items-center justify-end gap-6 text-white font-rocker font-bold text-lg tracking-wide">
          <Link href="/" className="px-4 py-2 hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
            INÍCIO
          </Link>
          <Link href="/cuidados" className="px-4 py-2 hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
            CUIDADOS
          </Link>
          <Link href="/sobre" className="px-4 py-2 hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
            SOBRE MIM
          </Link>
          <Link href="/loja" className="px-4 py-2 hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
            LOJA
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center py-6 gap-6 text-white font-rocker text-xl tracking-wide">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
                Início
              </Link>
              <Link href="/cuidados" onClick={() => setIsOpen(false)} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
                Cuidados
              </Link>
              <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
                Sobre Mim
              </Link>
              <Link href="/loja" onClick={() => setIsOpen(false)} className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-300">
                Loja
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}