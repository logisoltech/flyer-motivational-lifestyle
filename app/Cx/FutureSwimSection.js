"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const CARDS = [
  { src: "/swim.png", alt: "Flyer parked near a pool" },
  { src: "/swimming.png", alt: "Top view of pool and flyer pads" },
  { src: "/future.png", alt: "Future flyer concept cockpit view" },
];

export default function FutureSwimSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section className="w-full bg-[#E2E0D1] pb-12 pt-4 md:pb-16">
        <div className="relative w-full">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map(({ src, alt }) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage({ src, alt })}
                className="relative h-52 overflow-hidden sm:h-56 lg:h-60 group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.33vw"
                />
              </button>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white/85 to-transparent sm:w-28"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white/85 to-transparent sm:w-28"
            aria-hidden
          />
        </div>
      </section>

      {/* fullscreen image modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 transition"
            aria-label="Close image"
          >
            <FaTimes className="size-7" />
          </button>

          <div className="relative w-full max-w-7xl h-[90vh]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}