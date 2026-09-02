const artists = [
  {
    name: "Bit",
    pronouns: "She/Her",
    role: "Owner · Stylist · Educator",
    description:
      "With nearly 20 years of experience, Bit is a stylist, educator, and consultant who has taught stylists across North America and worked backstage at New York Fashion Week.",
  },
  {
    name: "Yoshi",
    pronouns: "He/Him",
    role: "Owner · Stylist",
    description:
      "With 19 years behind the chair, Yoshi specializes in fine hair and loves creating lived-in, natural colors and balayage looks.",
  },
  {
    name: "Maddy",
    pronouns: "She/Her",
    role: "Stylist · Blonde Specialist",
    description:
      "Maddy loves all things blonde, from highlights to balayage, and creating bright, beautiful looks for her clients.",
  },
  {
    name: "Rose",
    pronouns: "She/Her",
    role: "Stylist",
    description:
      "Rose thrives on creativity and loves a good challenge, from lived-in color to turning a client's vision into their perfect finished look.",
  },
  {
    name: "Katie",
    pronouns: "She/Her",
    role: "Stylist · Texture Specialist",
    description:
      "After 23 years in the industry, Katie is all about texture — creating it where none exists and bringing out the beauty of natural waves and curls.",
  },
  {
    name: "Aly",
    pronouns: "They/Them",
    role: "Stylist · Gender-Affirming Hair",
    description:
      "Aly creates bold, gender-affirming styles that are low-maintenance but high impact, with a passion for non-traditional looks.",
  },
  {
    name: "Kat",
    pronouns: "She/Her",
    role: "Stylist · Color Specialist",
    description:
      "Kat loves transforming shorter hair, tackling color corrections, bleach-and-tones, and creating stunning redhead looks.",
  },
];

function Team() {
  return (
    <section
      id="team"
      className="bg-[#171512] px-6 py-24 text-[#f3eadc] md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99a78]">
              Meet the artists
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              The people
              <br />
              behind Disco.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55">
            A team of experienced artists with their own specialties,
            perspectives, and approach to creating great hair.
          </p>
        </div>

        <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => (
            <article
              key={artist.name}
              className="group min-h-[300px] border-b border-r border-white/15 p-7 transition hover:bg-white/[0.04] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-white/30">0{index + 1}</span>

                <span className="text-xs text-white/30">{artist.pronouns}</span>
              </div>

              <div className="mt-20">
                <h3 className="font-serif text-4xl">{artist.name}</h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#b99a78]">
                  {artist.role}
                </p>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  {artist.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
