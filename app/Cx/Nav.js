"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Flyer Design", href: "#flyer-designs" },
  { label: "Flyer Park", href: "#flyer-park" },
  { label: "Applications", href: "#flyer-park" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClick = (e, href) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) {
      history.replaceState(null, "", href);
    }
  };

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="absolute right-5 top-6 z-40 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:hidden"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        {open ? (
          <FaTimes className="size-5" aria-hidden />
        ) : (
          <FaBars className="size-5" aria-hidden />
        )}
      </button>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-black/85 backdrop-blur-md transition-opacity duration-300 sm:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-2xl font-semibold tracking-wide text-white/95 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#e3b53f] px-7 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-[#f0c94a]"
          >
            Invest / Donate
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="rounded-full border border-[#e3b53f] px-7 py-3 text-base font-semibold text-[#e3b53f] transition hover:bg-[#e3b53f] hover:text-black"
          >
            Buy M.D Crypto
          </a>
        </div>
      </div>

      {/* Desktop pill nav */}
      <nav
        className="absolute left-1/2 top-8 z-30 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-20 py-3 shadow-lg backdrop-blur-md sm:block"
        aria-label="Primary"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <ul className="flex items-center justify-center gap-x-14">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="relative inline-block cursor-pointer text-sm font-normal tracking-wide text-white/95 whitespace-nowrap transition-colors hover:text-white after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA buttons (right side, outside nav) */}
      <div
        className="absolute right-8 top-8 z-30 hidden items-center gap-3 sm:flex"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <a
          href="#"
          className="rounded-full bg-[#e3b53f] px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:bg-[#f0c94a]"
        >
          Invest / Donate
        </a>
        <a
          href="#"
          className="rounded-full bg-[#e3b53f] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#f0c94a]"
        >
          Buy M.D Crypto
        </a>
      </div>
    </>
  );
}