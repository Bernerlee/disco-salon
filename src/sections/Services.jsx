import doingHairImage from "../assets/doinghair.jpg";

const services = [
  {
    name: "Haircuts",
    description: "Personalized cuts designed around your style and lifestyle.",
    price: "From $85",
  },
  {
    name: "Color",
    description: "Custom color created to complement your natural look.",
    price: "From $150",
  },
  {
    name: "Blonding",
    description: "Beautiful dimensional blondes with a personalized finish.",
    price: "From $200",
  },
  {
    name: "Extensions",
    description: "Length, volume, and seamless transformations.",
    price: "From $250",
  },
  {
    name: "Styling",
    description:
      "Polished looks for events, nights out, and everything between.",
    price: "From $75",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#171512] px-6 py-24 text-[#f3eadc] md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99a78]">
              What we do
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-6xl lg:text-7xl">
              Services
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            From fresh cuts to dimensional color, our artists create
            personalized looks that feel effortless and completely you.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Service list */}
          <div>
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group border-t border-white/15 py-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="mb-2 block text-[10px] text-white/40">
                      0{index + 1}
                    </span>

                    <h3 className="font-serif text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                      {service.name}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                      {service.description}
                    </p>
                  </div>

                  <span className="whitespace-nowrap pt-6 text-xs text-white/60">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}

            <a
              href="#booking"
              className="mt-8 inline-flex border border-[#f3eadc] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-[#f3eadc] hover:text-[#171512]"
            >
              Book an Appointment
            </a>
          </div>

          {/* Image */}
          <div className="lg:pt-8">
            <div className="overflow-hidden">
              <img
                src={doingHairImage}
                alt="Disco Salon stylist working with a client"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 md:h-[650px]"
              />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Good hair. Good vibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
