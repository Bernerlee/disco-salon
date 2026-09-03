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
            <img
              src="/disco-logo.png"
              alt="Disco Salon"
              className="h-auto w-48"
            />

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/50">
              A creative salon in the heart of Atlanta, creating hair with
              personality, intention, and a little bit of disco.
            </p>

            <a
              href="https://booking.mangomint.com/discosalon?serviceId=25"
              target="_blank"
              rel="noopener noreferrer"
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
              638 Glenwood Ave SE Apt B
              <br />
              Atlanta, GA 30312
              <br />
              United States
            </address>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Disco+Salon+638+Glenwood+Ave+SE+Atlanta+GA+30312"
              target="_blank"
              rel="noopener noreferrer"
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

            <div className="space-y-4 text-sm text-white/70">
              <a
                href="tel:+14705895487"
                className="block transition hover:text-white"
              >
                +1 470 589 5487
              </a>

              <a
                href="mailto:discosalonatl@gmail.com"
                className="block break-all transition hover:text-white"
              >
                discosalonatl@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Hours
            </h3>

            <div className="space-y-2 text-sm leading-6 text-white/70">
              <div className="flex justify-between gap-5">
                <span>Mon</span>
                <span>Closed</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Tue</span>
                <span>9am — 5pm</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Wed</span>
                <span>9am — 5pm</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Thu</span>
                <span>9am — 5pm</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Fri</span>
                <span>9am — 5pm</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Sat</span>
                <span>9am — 5pm</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
            © 2026 Disco Salon. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-7">
            <a
              href="https://www.instagram.com/disco.salon.atl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="mailto:discosalonatl@gmail.com"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Email
            </a>

            <a
              href="tel:+14705895487"
              className="text-[10px] uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
