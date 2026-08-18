import React from "react";
import Image from "next/image";

interface MarqueeProps {
  reverse?: boolean;
}

export function Marquee({ reverse = false }: MarqueeProps) {
  // Create an array of items to repeat the image
  const items = Array.from({ length: 8 });

  const ImageSet = () => (
    <div className="flex flex-col gap-10 py-5">
      {items.map((_, i) => (
        <div key={i} className="relative w-full h-[40vh] opacity-30 grayscale mix-blend-screen">
          <Image 
            src="/marquee-image.jpeg" 
            alt="Mancudo Art" 
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute top-0 w-full h-[200vh] pointer-events-none flex flex-col z-0 overflow-hidden">
      <div 
        className="flex flex-col animate-marquee-vertical" 
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <ImageSet />
        <ImageSet />
      </div>
    </div>
  );
}
