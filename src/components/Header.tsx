import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full h-25 dark:bg-black">
      <div className="w-[33.5%] text-4x flex items-center justify-center">
        <Link href="/">
          <Image
            className="dark:invert-50 h-20 w-90"
            src="/mancudo.svg"
            alt="Mancudo logo"
            width={100}
            height={20}
            priority
          />
        </Link>
      </div>
      <nav className="w-[66.5%] flex items-center justify-between text-white font-rocker text-lg tracking-wide pr-10">
        <Link href="/" className="relative group hover:text-orange-600 transition-colors duration-300">
          Início
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/cuidados" className="relative group hover:text-orange-600 transition-colors duration-300">
          Cuidados
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/catalogo" className="relative group hover:text-orange-600 transition-colors duration-300">
          Catálogo
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/sobre" className="relative group hover:text-orange-600 transition-colors duration-300">
          Sobre Mim
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>        
    </header>
  );
}