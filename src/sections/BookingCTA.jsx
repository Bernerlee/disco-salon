function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/disco-salon.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/70">
          Ready for your next look?
        </p>

        <h2 className="font-serif text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
          Let's make
          <br />
          some magic.
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/70 md:text-base">
          Come hang out, get inspired, and leave with hair you can't stop
          looking at.
        </p>

        <a
          href="#"
          className="mt-9 inline-flex bg-[#f3eadc] px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#171512] transition hover:bg-white"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export default BookingCTA;
