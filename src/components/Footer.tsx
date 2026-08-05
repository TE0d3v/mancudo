import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-20 w-full dark:bg-black flex items-center justify-between px-10 text-white font-rocker tracking-wide mt-auto">
      <div className="flex gap-4 items-center py-2">
        <span>ME SIGA :</span>
        <Link href="#" className="border-2 rounded-2xl px-4 py-2 h-10 flex items-center justify-center hover:text-orange-600 hover:border-orange-600 hover:scale-90 transition-all duration-300">
          INSTAGRAM
        </Link>
        <Link href="#" className="border-2 rounded-2xl px-4 py-2 h-10 flex items-center justify-center hover:text-orange-600 hover:border-orange-600 hover:scale-90 transition-all duration-300">
          TIKTOK
        </Link>
      </div>
      <div>
        TODOS OS DIREITOS RESERVADOS 2026
      </div>
    </footer>
  );
}
