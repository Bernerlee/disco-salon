import exteriorImage from "../assets/exterior.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-[#f3eadc] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src={exteriorImage}
              alt="Disco Salon exterior"
              className="h-[500px] w-full object-cover md:h-[650px]"
            />
          </div>

          {/* Small label */}
          <div className="absolute -bottom-5 -right-3 bg-[#171512] px-5 py-4 text-white md:-right-5">
            <p className="text-[9px] uppercase tracking-[0.25em]">
              Atlanta, Georgia
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="lg:pl-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Welcome to Disco
          </p>

          <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-[#171512] md:text-6xl lg:text-7xl">
            More than a salon.
            <br />
            It's a vibe.
          </h2>

          <div className="mt-8 max-w-lg space-y-5 text-sm leading-7 text-[#514a42] md:text-base">
            <p>
              Disco Salon is an independent hair salon built around creativity,
              individuality, and good energy.
            </p>

            <p>
              Our artists specialize in creating effortless cuts, lived-in
              color, and looks that feel completely you. Come for the hair, stay
              for the good vibes.
            </p>
          </div>

          <a
            href="#services"
            className="mt-9 inline-flex border-b border-[#171512] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#171512] transition-opacity hover:opacity-50"
          >
            Discover Disco
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
