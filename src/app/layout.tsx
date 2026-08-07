import type { Metadata } from "next";
import { Geist, Geist_Mono, New_Rocker} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newRocker = New_Rocker({
  variable: "--font-new-rocker",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Mancudo | Tatuador",
  description: "Portfólio de tatuagem e artes de Mancudo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${newRocker.variable} flex flex-col h-full antialiased dark`}
    >
      <body className="bg-black text-white min-h-full flex flex-col bg-noise selection:bg-accent selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
