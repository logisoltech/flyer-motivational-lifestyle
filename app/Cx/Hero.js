"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Nav from "./Nav";

export default function Hero() {
  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      requestAnimationFrame(() => AOS.refreshHard());
    }

    initAOS();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/Design-1.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/60"
        aria-hidden
      />
      {/* Top vignette so logo & pill nav stay readable */}
      <div
        className="pointer-events-none absolute inset-0 z-11 bg-linear-to-b from-black/50 via-black/10 to-transparent"
        aria-hidden
      />

      <a
        href="/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <Image
          src="/logo.png"
          alt="Institutional Lifestyle"
          width={400}
          height={130}
          className="h-16 w-auto sm:h-19 md:h-20 lg:h-24"
          priority
        />
      </a>

      <Nav />

    
      {/* Headline block: left aligned to match reference */}
      <div
        className="absolute left-5 top-36 z-20 w-[min(34rem,calc(100%-2rem))] sm:left-10 sm:top-34 sm:w-[min(36rem,calc(100%-3rem))] md:left-14 md:top-40 md:w-[min(38rem,calc(100%-4rem))] lg:left-20 lg:top-46 lg:w-152"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full text-left">
          <p className="max-w-104 font-extrabold uppercase tracking-[0.01em] text-white text-2xl leading-[1.05] drop-shadow-[0_1px_10px_rgba(255,255,255,0.5)] sm:text-[2.05rem] md:text-[2.25rem]">
            1 FLYER IFFO PARK GO/LIVE/PARK ANYWHERE
          </p>
          <p className="mt-5 max-w-116 text-sm font-normal leading-relaxed text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.4)] sm:text-[1.02rem]">
            Introducing our versatile flying drone, designed to soar through the
            skies and reach any destination with ease. Equipped with
            cutting-edge A.I. technology, it navigates effortlessly, making it
            perfect for exploration, photography, or delivery. Experience the
            freedom of flight like never before!
          </p>
        </div>
      </div>
    </section>
  );
}