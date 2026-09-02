function Testimonial() {
  const testimonials = [
    {
      quote:
        "I cannot thank Katie enough for my new cut! I've been trying to find a GA stylist since I moved here 7 years ago and I finally have.",
      name: "Dorothy McNab",
    },
    {
      quote:
        "Aly Ranic is amazing! They cut my 12 yo son's hair and always does an amazing job.",
      name: "Aub Pope",
    },
    {
      quote:
        "Katie is a rock star! Kind, hilarious, and so knowledgeable. She gave me a fabulous cut and taught me a ton about styling my hair.",
      name: "Carrie Bishop",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#e7d7c3] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8b5e3c]">
            Client love
          </p>

          <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] text-[#171512] md:text-6xl lg:text-7xl">
            Good hair.
            <br />
            Happy people.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[320px] flex-col justify-between border border-[#171512]/15 p-7 md:p-8"
            >
              <div>
                <span className="font-serif text-5xl text-[#8b5e3c]">“</span>

                <p className="mt-4 font-serif text-2xl leading-tight text-[#171512]">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-10 border-t border-[#171512]/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#171512]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[#171512]/50">
                  Verified client
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
