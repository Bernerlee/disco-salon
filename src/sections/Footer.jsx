function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#171512] px-6 pb-8 pt-20 text-[#f3eadc] md:px-10 md:pt-24 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-5xl tracking-[0.03em]">DISCO</p>

            <p className="mt-1 text-[9px] tracking-[0.4em]">SALON</p>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/50">
              Good hair. Good vibes. A creative salon in the heart of Atlanta.
            </p>

            <a
              href="#booking"
              className="mt-7 inline-flex border border-[#f3eadc] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#f3eadc] hover:text-[#171512]"
            >
              Book Now
            </a>
          </div>

          {/* Visit */}
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Visit
            </h3>

            <address className="not-italic text-sm leading-7 text-white/70">
              638 Glenwood Ave SE
              <br />
              Atlanta, GA 30312
            </address>

            <a
              href="#"
              className="mt-4 inline-block text-xs uppercase tracking-[0.12em] text-[#f3eadc]"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/70">
              <a
                href="tel:+14045550123"
                className="block transition hover:text-white"
              >
                (404) 555-0123
              </a>

              <a
                href="mailto:hello@disco.salon"
                className="block transition hover:text-white"
              >
                hello@disco.salon
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Hours
            </h3>

            <div className="space-y-2 text-sm leading-6 text-white/70">
              <p>Mon — Fri &nbsp; 9am — 7pm</p>
              <p>Saturday &nbsp; 9am — 5pm</p>
              <p>Sunday &nbsp; Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
            © 2026 Disco Salon. All rights reserved.
          </p>

          <div className="flex gap-7">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
