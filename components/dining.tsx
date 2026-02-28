import Image from "next/image"

const dishes = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20meal%201.png-t44m3E0geHk9mukSPRVs4aOAEhBAoM.jpeg",
    alt: "Full English breakfast with eggs, sausages, and pancakes",
    title: "Full Breakfast",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20meal%203-V9v6QzvY5W7x1wUHvHl1RQNtKYNKWq.png",
    alt: "Gourmet herb dish with feta and tomatoes",
    title: "Gourmet Cuisine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20meal%204-JabUu61PmnNyKAoWH0gauaKPq7JDlm.png",
    alt: "Tender braised meat with pasta",
    title: "Chef Specials",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20meal-r0T1wpdxbfNo1cSq3Sd5yXl6OR0lzw.png",
    alt: "Grilled chicken wrap with fresh salad",
    title: "Light Bites",
  },
]

export function Dining() {
  return (
    <section id="dining" className="bg-foreground py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Dining Experience
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">A Culinary Journey Awaits</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-primary-foreground/70">
              <p>
                Our restaurant offers an exceptional dining experience featuring a diverse menu
                of local Zambian favorites and international cuisine, prepared with the freshest
                ingredients by our talented culinary team.
              </p>
              <p>
                Enjoy a complimentary full breakfast with your stay, or visit us for lunch and
                dinner to explore our rich menu. From casual meals to intimate dining experiences,
                every plate is crafted to delight.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary">
                Outside Catering Services
              </h3>
              <p className="text-base leading-relaxed text-primary-foreground/70">
                Book us for your next event and enjoy our food! We offer outside catering services
                for all types of events: weddings, kitchen parties, conferences, workshops, and
                private parties.
              </p>
              <a
                href="#contact"
                className="inline-block rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
              >
                Enquire About Catering
              </a>
            </div>
          </div>

          {/* Food grid */}
          <div className="grid grid-cols-2 gap-4">
            {dishes.map((dish, index) => (
              <div key={index} className="group relative overflow-hidden rounded-sm">
                <div className="relative aspect-square">
                  <Image
                    src={dish.src}
                    alt={dish.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                    {dish.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Catering images */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20catering%20services.png-2nnIjv9mHjWopFPMQat8GR3viIPYn1.jpeg"
              alt="Cosmic Lodge catering services display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20catering%20services%202.png-lT4UtEUoPvvjI1ZbespTwbwqLRnIUe.jpeg"
              alt="Buffet spread with variety of dishes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20catering%20services%203.png-iLOmECuBWOegwYUI3SiLs1CHOoS4im.jpeg"
              alt="Sausages and vegetables in chafing dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
