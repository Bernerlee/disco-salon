import faceWomanImage from "../assets/facewoman.jpg";
import wineHairImage from "../assets/winehair.jpg";
import pinkGirlImage from "../assets/pinkgirl.jpg";

const artists = [
  {
    name: "Artist One",
    role: "Stylist & Colorist",
    image: faceWomanImage,
  },
  {
    name: "Artist Two",
    role: "Color Specialist",
    image: wineHairImage,
  },
  {
    name: "Artist Three",
    role: "Stylist",
    image: pinkGirlImage,
  },
];

function Team() {
  return (
    <section
      id="team"
      className="bg-[#171512] px-6 py-24 text-[#f3eadc] md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99a78]">
              Meet the artists
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-6xl lg:text-7xl">
              The people
              <br />
              behind the hair.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Great hair starts with great people. Our artists bring their own
            perspective, creativity, and personality to every appointment.
          </p>
        </div>

        {/* Artists */}
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="group">
              <div className="overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[500px]"
                />
              </div>

              <div className="mt-5 flex items-start justify-between border-b border-white/15 pb-5">
                <div>
                  <h3 className="font-serif text-2xl">{artist.name}</h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/45">
                    {artist.role}
                  </p>
                </div>

                <span className="text-xl text-white/40 transition group-hover:text-white">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
