import Image from "next/image"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20catering%20services%201-mLYouv4sZbxoBXJKlZDarbZzv7vAVs.png"
          alt="Cosmic Lodge grand buffet setup"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Plan Your Event
        </p>
        <h2 className="mb-6 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Host Your Next Event With Us</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          From intimate kitchen parties to grand wedding receptions, our versatile venues and
          exceptional catering team ensure every event is a success.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+260966782179"
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
          >
            Call Us Now
          </a>
          <a
            href="mailto:reservations@cosmiclodge.org"
            className="rounded-sm border-2 border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:border-primary hover:bg-primary/10"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
