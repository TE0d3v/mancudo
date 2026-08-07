import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 md:py-0 md:h-20 text-white font-rocker tracking-wide mt-auto gap-4 md:gap-0 border-t border-zinc-900">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <span>ME SIGA :</span>
        <Link href="#" className="border-4 border-zinc-800 rounded-none px-6 py-2 h-12 flex items-center justify-center font-bold hover:bg-accent hover:border-accent hover:text-black transition-colors duration-300">
          INSTAGRAM
        </Link>
        <Link href="#" className="border-4 border-zinc-800 rounded-none px-6 py-2 h-12 flex items-center justify-center font-bold hover:bg-accent hover:border-accent hover:text-black transition-colors duration-300">
          TIKTOK
        </Link>
      </div>
      <div className="text-center md:text-right text-sm md:text-base text-zinc-500">
        TODOS OS DIREITOS RESERVADOS {new Date().getFullYear()}
      </div>
    </footer>
  );
}
