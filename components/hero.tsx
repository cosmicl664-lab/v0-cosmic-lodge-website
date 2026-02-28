import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20outdoor%20main-gsb77TAcTyEdvZGReBmSpSW2puHDsu.png"
          alt="Cosmic Executive Lodge exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[85vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Lusaka, Zambia
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">Your Home Away From Home</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Experience executive-class comfort in the heart of Lusaka. Premium accommodation,
              world-class dining, and exceptional event services await you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
              >
                Book Your Stay
              </a>
              <a
                href="#services"
                className="rounded-sm border-2 border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-px bg-primary/20 md:grid-cols-4 lg:grid-cols-6">
            {[
              { label: "Free Wi-Fi" },
              { label: "Free Breakfast" },
              { label: "Free Parking" },
              { label: "Swimming Pool" },
              { label: "Kid-Friendly" },
              { label: "Fitness Center" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center bg-foreground/80 px-4 py-3.5 backdrop-blur-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
