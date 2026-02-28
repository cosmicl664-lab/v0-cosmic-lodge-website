import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Contact & Reservations</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ready to book your stay or enquire about our services? Reach out to us anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="rounded-sm bg-card p-8 shadow-sm">
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Reservation Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+260966782179"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +260 966 782 179
                    </a>
                    <br />
                    <a
                      href="tel:+260978922474"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +260 978 922 474
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:reservations@cosmiclodge.org"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      reservations@cosmiclodge.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Olympia, Lubasenshi Close,
                      <br />
                      off Katima Mulilo Road, Lusaka
                    </p>
                    <a
                      href="https://maps.app.goo.gl/hxrrFoMtW4c9gmNe9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-accent"
                    >
                      View on Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nearby</p>
                    <p className="text-muted-foreground">
                      5 minutes to Arcades Shopping Mall
                      <br />5 minutes to East Park Mall
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-sm bg-card shadow-sm">
            <div className="relative" style={{ minHeight: "450px", height: "100%" }}>
              <a
                href="https://maps.app.goo.gl/hxrrFoMtW4c9gmNe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[450px] flex-col items-center justify-center gap-6 bg-secondary p-8 text-center transition-colors hover:bg-muted"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                    Find Us on Google Maps
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Olympia, Lubasenshi Close, off Katima Mulilo Road, Lusaka
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent">
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
