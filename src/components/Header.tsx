"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row w-full bg-black relative z-50">
      <div className="flex items-center justify-between w-full h-24 px-6 md:px-10">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              className="h-16 w-auto md:h-20 invert"
              src="/mancudo.svg"
              alt="Mancudo logo"
              width={100}
              height={20}
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end gap-6 text-white font-rocker font-bold text-lg tracking-wide w-full">
          <Link href="/" className="px-4 py-2 hover:bg-accent hover:text-black transition-colors duration-200">
            INÍCIO
          </Link>
          <Link href="/cuidados" className="px-4 py-2 hover:bg-accent hover:text-black transition-colors duration-200">
            CUIDADOS
          </Link>
          <Link href="/sobre" className="px-4 py-2 hover:bg-accent hover:text-black transition-colors duration-200">
            SOBRE MIM
          </Link>
          <Link href="/loja" className="px-4 py-2 hover:bg-accent hover:text-black transition-colors duration-200">
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
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                Início
              </Link>
              <Link href="/cuidados" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                Cuidados
              </Link>
              <Link href="/catalogo" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                Catálogo
              </Link>
              <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                Sobre Mim
              </Link>
              <Link href="/loja" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                Loja
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}