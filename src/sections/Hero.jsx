import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Disco Salon interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/80 md:text-sm">
            Atlanta's Original
          </p>

          {/* Heading */}
          <h1 className="font-serif text-5xl leading-[0.92] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Good Hair.
            <br />
            Good Vibes.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 md:text-base">
            Disco Salon is where creativity meets community. A modern salon
            experience with lived-in color, cuts, and killer vibes.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="bg-[#f3e7d3] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-white"
            >
              Book Your Appointment
            </a>

            <a
              href="#services"
              className="border border-white/70 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>

        <span className="h-8 w-px bg-white/50"></span>
      </div>
    </section>
  );
}

export default Hero;
