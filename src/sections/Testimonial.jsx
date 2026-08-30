function Testimonial() {
  return (
    <section className="bg-[#e7d7c3] px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#8b5e3c]">
          What people are saying
        </p>

        <div className="mb-8 text-4xl text-[#8b5e3c]">“</div>

        <blockquote className="font-serif text-4xl leading-[1.1] text-[#171512] md:text-5xl lg:text-6xl">
          The kind of place where you leave with amazing hair and somehow feel
          like you've been hanging out with friends all afternoon.
        </blockquote>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171512]">
            Happy Disco Client
          </p>

          <div className="mx-auto mt-5 h-px w-10 bg-[#8b5e3c]"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
