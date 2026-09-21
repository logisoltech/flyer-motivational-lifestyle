"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Flyer Design", href: "#flyer-designs" },
  { label: "Flyer Park", href: "#flyer-park" },
  { label: "Applications", href: "#flyer-park" },
];

const btnClass =
  "rounded-full bg-[#e3b53f] px-5 py-2.5 text-base font-semibold leading-none text-black shadow-lg transition hover:bg-[#f0c94a] text-center";

const mobileBtnClass =
  "rounded-full bg-[#e3b53f] px-7 py-2.5 text-lg font-semibold leading-none text-black shadow-lg transition hover:bg-[#f0c94a] text-center";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!open && !contactOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, contactOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setContactOpen(false);
      }
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

  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
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
        className="absolute right-5 top-2.5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:hidden"
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
          <a href="#" onClick={() => setOpen(false)} className={mobileBtnClass}>
            Invest / Donate
          </a>
          <a href="#" onClick={() => setOpen(false)} className={mobileBtnClass}>
            Buy M.D Crypto
          </a>
          <button type="button" onClick={openContact} className={mobileBtnClass}>
            Contact
          </button>
          <a href="#" onClick={() => setOpen(false)} className={mobileBtnClass}>
            Financing Available
          </a>
        </div>
      </div>

      {/* Desktop pill nav */}
      <nav
        className="absolute left-1/2 top-3 z-30 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-20 py-3 shadow-lg backdrop-blur-md sm:block"
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
        className="absolute right-8 top-3 z-30 hidden flex-col items-stretch gap-2 sm:flex"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div className="flex items-center gap-3">
          <a href="#" className={btnClass}>
            Invest / Donate
          </a>
          <a href="#" className={btnClass}>
            Buy M.D Crypto
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={openContact} className={btnClass}>
            Contact
          </button>
          <a href="#" className={btnClass}>
            Financing Available
          </a>
        </div>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#E2E0D1] px-6 py-8 shadow-2xl sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-neutral-700 transition hover:bg-black/10"
              aria-label="Close contact"
            >
              <FaTimes className="size-4" aria-hidden />
            </button>

            <h3
              id="contact-modal-title"
              className="pr-8 text-center text-lg font-extrabold uppercase tracking-[0.02em] text-[#1f212b] sm:text-xl"
            >
              M.D. Motivational Enterprises LLC – Location
            </h3>
            <p className="mt-4 text-center text-base leading-relaxed text-[#262626] sm:text-lg">
              56 St. NY. NY. 10019
            </p>
          </div>
        </div>
      )}
    </>
  );
}
