import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20logo%20icons-D6pWbsuqKp1KZULGgBvwBlwGZnumMl.png"
              alt="Cosmic Lodge Logo"
              width={140}
              height={50}
              className="mb-4 h-10 w-auto brightness-125"
            />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Your home away from home. Executive comfort and world-class hospitality in the
              heart of Lusaka, Zambia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Restaurant & Dining", href: "#dining" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Accommodation",
                "Conference Facilities",
                "Outside Catering",
                "Venue Hire",
                "Restaurant",
                "Event Planning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-primary-foreground/60">
                  Olympia, Lubasenshi Close,
                  <br />
                  off Katima Mulilo Road, Lusaka
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <a
                    href="tel:+260966782179"
                    className="block text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    +260 966 782 179
                  </a>
                  <a
                    href="tel:+260978922474"
                    className="block text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    +260 978 922 474
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:reservations@cosmiclodge.org"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                >
                  reservations@cosmiclodge.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Cosmic Executive Lodge. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Olympia, Lusaka, Zambia
          </p>
        </div>
      </div>
    </footer>
  )
}
