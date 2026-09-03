const services = [
  {
    number: "01",
    name: "New Client Cut",
    description:
      "First time at Disco? Start here. This appointment includes extra time so we can properly consult, get to know your hair, and talk through your goals. Whether you're looking for a subtle refresh or a bigger shift, we'll build a shape that works for your lifestyle, styling habits, and maintenance reality. Great hair always starts with a good conversation.",
    price: "$110 — $185",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=25",
  },
  {
    number: "02",
    name: "Existing Client Cut",
    description:
      "This is your regular haircut appointment — whether you're maintaining your current shape or evolving it slightly. Your stylist will refine the structure, create movement, and make sure everything grows out beautifully. Maintenance and evolution live here.",
    price: "$85 — $150",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=24",
  },
  {
    number: "03",
    name: "Short Cut",
    description:
      "Short appointment in time, not short in hair length. This service is for quicker tidy-ups like dry cuts, clipper cuts, or what used to be called our micro cuts. If you're maintaining a shape or just need a quick refresh between full cuts, this is the right booking. Small appointment. Same Disco care.",
    price: "$50 — $75",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=66",
  },
  {
    number: "04",
    name: "Bang Trim",
    description:
      "A quick clean-up between haircuts. Perfect for fringe trims or small detail work to keep things looking sharp between full appointments. Little maintenance, big difference.",
    price: "$22 — $35",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=28",
  },
  {
    number: "05",
    name: "Beard Trim",
    description:
      "This service focuses on shaping, detailing, and refining your facial hair so everything sits clean and intentional. Perfect for maintaining your beard's structure without needing a full haircut appointment. Does not include a full facial shave.",
    price: "$40",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=59",
  },
  {
    number: "06",
    name: "Shampoo and Style",
    description:
      "Come in, relax, and let us handle the rest. This appointment includes a cleanse, condition, and customized blowdry style tailored to your hair type and desired finish — whether that's smooth, voluminous, textured, or somewhere in between.",
    price: "$60 — $100",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=78",
  },
  {
    number: "07",
    name: "Kids Cut",
    description:
      "For children 10 years old or younger. Shampoo and style included.",
    price: "$60",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=49",
  },
  {
    number: "08",
    name: "Gloss + Blowout",
    description:
      "A gloss enhances your color, boosts shine, and adjusts tone — perfect for refreshing faded color or adding richness. Finished with a blowdry style. Think: polished, shiny, healthy hair.",
    price: "$100 — $150",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=69",
  },
  {
    number: "09",
    name: "Gloss + Haircut",
    description:
      "A gloss service to refine tone and add shine paired with a haircut to clean up your shape and keep ends healthy. Finished with your style of choice.",
    price: "$125 — $190",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=68",
  },
  {
    number: "10",
    name: "Regrowth and Balance",
    description:
      "This service covers your regrowth, including grey coverage, and finishes with a gloss to balance tone through the ends. A maintenance trim of anything less than 1–2 inches is included to keep your shape looking fresh.",
    price: "$125 — $300",
    bookingUrl: "https://booking.mangomint.com/discosalon?serviceId=70",
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
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99a78]">
              What we do
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              Services made
              <br />
              for your hair.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50">
            From a fresh cut to a complete color transformation, every
            appointment starts with understanding what you want.
          </p>
        </div>

        {/* Services */}
        <div className="border-t border-white/15">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-6 border-b border-white/15 py-8 transition hover:bg-white/[0.03] md:grid-cols-[70px_1fr_180px_150px] md:items-center md:gap-8"
            >
              {/* Number */}
              <span className="text-xs text-white/30">{service.number}</span>

              {/* Service information */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">
                  {service.name}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                  {service.description}
                </p>
              </div>

              {/* Price */}
              <div className="md:text-right">
                <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                  Starting / Range
                </p>

                <p className="mt-2 text-sm text-[#f3eadc]">{service.price}</p>
              </div>

              {/* Book button */}
              <div className="md:text-right">
                <a
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] transition group-hover:border-[#f3eadc] group-hover:bg-[#f3eadc] group-hover:text-[#171512]"
                >
                  Book Now
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-white/35 md:flex-row md:justify-between">
          <p>
            Prices vary depending on hair length, density, and service needs.
          </p>

          <a
            href="https://booking.mangomint.com/discosalon?serviceId=25"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.15em] text-[#f3eadc] transition hover:text-white"
          >
            View all booking options →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
