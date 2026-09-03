import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Top navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-50 text-white" onClick={closeMenu}>
            <span className="block font-serif text-3xl tracking-[0.08em]">
              DISCO
            </span>

            <span className="mt-[-4px] block text-center text-[8px] tracking-[0.35em]">
              SALON
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#about"
              className="text-xs uppercase tracking-[0.15em] text-white transition hover:opacity-60"
            >
              About
            </a>

            <a
              href="#services"
              className="text-xs uppercase tracking-[0.15em] text-white transition hover:opacity-60"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="text-xs uppercase tracking-[0.15em] text-white transition hover:opacity-60"
            >
              Gallery
            </a>

            <a
              href="#team"
              className="text-xs uppercase tracking-[0.15em] text-white transition hover:opacity-60"
            >
              Team
            </a>

            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.15em] text-white transition hover:opacity-60"
            >
              Contact
            </a>
          </div>

          {/* Desktop Book button */}
          <a
            href="#booking"
            className="hidden border border-white bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-black transition hover:bg-transparent hover:text-white lg:block"
          >
            Book Now
          </a>

          {/* Mobile / Tablet menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col gap-1.5 lg:hidden cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-px w-7 bg-white transition duration-300 ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            ></span>

            <span
              className={`block h-px w-7 bg-white transition duration-300 ${
                isOpen ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile / Tablet menu */}
        <div
          className={`absolute left-0 top-0 w-full bg-[#171512] px-6 pb-10 pt-28 transition-all duration-300 md:px-10 lg:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-white/60"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-white/60"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-white/60"
            >
              Gallery
            </a>

            <a
              href="#team"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-white/60"
            >
              Team
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-white/60"
            >
              Contact
            </a>

            {/* Mobile Book button */}
            <a
              href="#booking"
              onClick={closeMenu}
              className="mt-8 inline-flex w-full items-center justify-center bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white/80"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
