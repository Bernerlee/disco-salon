import salonImage from "../assets/hero.jpg";
import chandelierImage from "../assets/Chandelierview.jpg";
import discoImage from "../assets/disc.jpg";
import pinkGirlImage from "../assets/pinkgirl.jpg";
import doingHairImage from "../assets/doinghair.jpg";
import ceilingImage from "../assets/ceiling.jpg";

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#f3eadc] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8b5e3c]">
              Inside Disco
            </p>

            <h2 className="font-serif text-5xl leading-none text-[#171512] md:text-6xl lg:text-7xl">
              The Disco
              <br />
              experience.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#514a42]">
            A little bit vintage. A little bit unexpected. Always a good time.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* Main image */}
          <div className="overflow-hidden md:col-span-2 lg:col-span-7 lg:row-span-2">
            <img
              src={salonImage}
              alt="Disco Salon interior with stained glass"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105 lg:h-full"
            />
          </div>

          {/* Chandelier */}
          <div className="overflow-hidden lg:col-span-5">
            <img
              src={chandelierImage}
              alt="Disco Salon chandelier and ceiling"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Disco */}
          <div className="overflow-hidden lg:col-span-5">
            <img
              src={discoImage}
              alt="Disco Salon interior detail"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Pink editorial image */}
          <div className="overflow-hidden lg:col-span-4">
            <img
              src={pinkGirlImage}
              alt="Disco Salon style"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Hair styling */}
          <div className="overflow-hidden lg:col-span-4">
            <img
              src={doingHairImage}
              alt="Stylist working at Disco Salon"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Ceiling */}
          <div className="overflow-hidden lg:col-span-4">
            <img
              src={ceilingImage}
              alt="Disco Salon interior detail"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Instagram link */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="border-b border-[#171512] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#171512] transition-opacity hover:opacity-50"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
