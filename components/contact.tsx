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

          {/* Map embed */}
          <div className="overflow-hidden rounded-sm bg-card shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.3!2d28.31!3d-15.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI0JzM2LjAiUyAyOMKwMTgnMzYuMCJF!5e0!3m2!1sen!2szm!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cosmic Executive Lodge location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
