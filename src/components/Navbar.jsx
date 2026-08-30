function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white">
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

        {/* Book button */}
        <a
          href="#booking"
          className="hidden border border-white bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-black transition hover:bg-transparent hover:text-white md:block"
        >
          Book Now
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-px w-7 bg-white"></span>
          <span className="block h-px w-7 bg-white"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
