import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20indoor-PtJqO3FYIG7y3rSxeWUakPEXXesZ5n.png"
                  alt="Cosmic Lodge elegant interior with wrought iron staircase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20outdoor%201-JVXYf61Ecl1j1794Bhaq6wZLfOnMla.png"
                  alt="Cosmic Lodge beautiful exterior with tropical plants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Welcome to Cosmic Lodge
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Executive Comfort in the Heart of Lusaka</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Nestled in the serene Olympia neighborhood on Lubasenshi Close, off Katima Mulilo
                Road, Cosmic Executive Lodge offers a perfect blend of comfort, convenience, and
                elegance. Just 5 minutes from Arcades and East Park Mall, we provide the ideal
                base for both business and leisure travelers.
              </p>
              <p>
                Our lodge features beautifully appointed rooms, a vibrant restaurant serving
                exquisite cuisine, versatile conference facilities, and a refreshing swimming pool.
                Whether you are here for a conference, a wedding celebration, or a peaceful
                retreat, Cosmic Executive Lodge delivers an experience beyond expectation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">5</p>
                <p className="mt-1 text-sm text-muted-foreground">Min to Arcades Mall</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">Front Desk Service</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">Guest Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
