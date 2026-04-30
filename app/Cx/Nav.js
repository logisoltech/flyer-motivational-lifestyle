const LINKS = [
    { label: "About", href: "#about" },
    { label: "Flyer Designs", href: "#flyer-designs" },
    { label: "Flyer Park", href: "#flyer-park" },
    { label: "Applications", href: "#applications" },
  ];
  
  export default function Nav() {
    return (
      <nav
        className="absolute left-1/2 top-21 z-30 w-[min(calc(100vw-2rem),72rem)] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-2.5 shadow-lg backdrop-blur-md sm:top-8 sm:w-auto sm:max-w-none sm:px-20 sm:py-3"
        aria-label="Primary"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-14">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative inline-block cursor-pointer text-sm font-normal tracking-wide text-white/95 whitespace-nowrap transition-colors hover:text-white after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }