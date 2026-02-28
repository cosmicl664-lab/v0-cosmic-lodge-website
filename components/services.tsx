import { Bed, UtensilsCrossed, Presentation, PartyPopper, Building2, ChefHat } from "lucide-react"

const services = [
  {
    icon: Bed,
    title: "Accommodation",
    description:
      "Beautifully appointed executive rooms with modern amenities, plush bedding, and a serene atmosphere for a restful stay.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description:
      "Savor a diverse menu of local and international cuisine prepared by our skilled chefs in an elegant dining setting.",
  },
  {
    icon: Presentation,
    title: "Conference Facilities",
    description:
      "Fully equipped conference rooms ideal for workshops, corporate meetings, seminars, and professional events.",
  },
  {
    icon: ChefHat,
    title: "Outside Catering",
    description:
      "Professional catering for weddings, kitchen parties, conferences, workshops, and private parties at any venue of your choice.",
  },
  {
    icon: PartyPopper,
    title: "Venue Hire",
    description:
      "Elegant indoor and outdoor spaces available for weddings, celebrations, corporate functions, and social gatherings.",
  },
  {
    icon: Building2,
    title: "Event Planning",
    description:
      "Let us handle the details. From table settings to full event coordination, we help make your occasion unforgettable.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            What We Offer
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Our Services</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From luxury stays to world-class catering, we deliver excellence across every
            touchpoint of your experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
