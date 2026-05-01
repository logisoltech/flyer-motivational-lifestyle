import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CARDS = [
  { src: "/swim.png", alt: "Flyer parked near a pool" },
  { src: "/swimming.png", alt: "Top view of pool and flyer pads" },
  { src: "/future.png", alt: "Future flyer concept cockpit view" },
];

export default function FutureSwimSection() {
  return (
    <section className="w-full bg-[#E2E0D1] pb-12 pt-4 md:pb-16">
      <div className="relative w-full">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ src, alt }) => (
            <div key={src} className="relative h-52 overflow-hidden sm:h-56 lg:h-60">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.33vw"
            />
            </div>
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

        <button
          type="button"
          className="absolute left-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-neutral-800 shadow-md backdrop-blur-sm transition hover:bg-white sm:size-12"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="size-4 sm:size-5" aria-hidden />
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-neutral-800 shadow-md backdrop-blur-sm transition hover:bg-white sm:size-12"
          aria-label="Next slide"
        >
          <FaChevronRight className="size-4 sm:size-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}
