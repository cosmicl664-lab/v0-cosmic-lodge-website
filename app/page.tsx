"use client"

import Image from "next/image"
import { useState } from "react"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
]

const SERVICES = [
  {
    title: "Accommodation",
    description: "Comfortable, well-appointed rooms with modern amenities for business and leisure travellers.",
    icon: "bed",
  },
  {
    title: "Conference Facilities",
    description: "Fully equipped conference rooms ideal for meetings, workshops, and corporate events.",
    icon: "presentation",
  },
  {
    title: "Restaurant",
    description: "Savour delicious local and international cuisine prepared by our experienced chefs.",
    icon: "utensils",
  },
  {
    title: "Outside Catering",
    description: "Professional catering for weddings, kitchen parties, conferences, workshops, and private events.",
    icon: "truck",
  },
  {
    title: "Venue Hire",
    description: "Elegant event spaces for celebrations, corporate functions, and special occasions.",
    icon: "building",
  },
  {
    title: "Swimming Pool",
    description: "Relax and unwind at our refreshing pool area surrounded by tropical greenery.",
    icon: "waves",
  },
]

const GALLERY_IMAGES = [
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20outdoor%20main.webp", alt: "Cosmic Lodge exterior" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20outdoor%201.webp", alt: "Lodge building with tropical plants" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20indoor.webp", alt: "Elegant lobby with wrought iron staircase" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20room.webp", alt: "Comfortable hotel room" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20pool.webp", alt: "Swimming pool area" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20outdoor.webp", alt: "Pool and restaurant exterior" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20restuarant.webp", alt: "Restaurant dining area" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20dining%20setup.webp", alt: "Elegant event dining setup" },
]

const FOOD_IMAGES = [
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20meal%201.webp", alt: "Full English breakfast" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20meal%203.webp", alt: "Gourmet plated dish" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20meal%204.webp", alt: "Braised meat with pasta" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20meal.webp", alt: "Chicken wrap with salad" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20meal%202.webp", alt: "Event dinner plate" },
]

const CATERING_IMAGES = [
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20catering%20services.webp", alt: "Catering services display" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20catering%20services%201.webp", alt: "Buffet setup" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20catering%20services%202.webp", alt: "Catering chafing dishes" },
  { src: "https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20catering%20services%203.webp", alt: "Sausages and greens" },
]

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    bed: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
    ),
    presentation: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
    ),
    utensils: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
    ),
    truck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
    ),
    building: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
    ),
    waves: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
    ),
  }
  return <>{icons[icon]}</>
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-[#2C1810] px-4 py-2 text-sm text-[#F5EDE0]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+260966782179" className="transition-colors hover:text-[#D4A84B]">
              +260 966 782 179
            </a>
            <span className="hidden sm:inline text-[#6B5744]">|</span>
            <a href="mailto:reservations@cosmiclodge.org" className="hidden sm:inline transition-colors hover:text-[#D4A84B]">
              reservations@cosmiclodge.org
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#D4A84B]">
            <span>Free Wi-Fi</span>
            <span>Free Breakfast</span>
            <span className="hidden sm:inline">Free Parking</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20logo%20icons-D6pWbsuqKp1KZULGgBvwBlwGZnumMl.png"
              alt="Cosmic Lodge Logo"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground transition-colors hover:text-[#C4862A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+260966782179"
              className="rounded bg-[#C4862A] px-5 py-2.5 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-[#D4A84B]"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
              ) : (
                <><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground transition-colors hover:text-[#C4862A]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+260966782179"
                className="mt-2 rounded bg-[#C4862A] px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* ===== HERO ===== */}
        <section id="home" className="relative h-[90vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20outdoor%20main.webp"
            alt="Cosmic Executive Lodge exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/80 via-[#2C1810]/50 to-transparent" />
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A84B]">
                  Welcome to Cosmic Executive Lodge
                </p>
                <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
                  Your Home Away From Home
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-[#F5EDE0]/90">
                  Experience exceptional hospitality in the heart of Lusaka. Luxury accommodation, fine dining, conference facilities, and world-class catering services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded bg-[#C4862A] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#D4A84B]"
                  >
                    Make a Reservation
                  </a>
                  <a
                    href="#services"
                    className="rounded border-2 border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AMENITIES BAR ===== */}
        <section className="bg-[#2C1810] py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 text-sm text-[#F5EDE0] sm:gap-10">
            {["Free Wi-Fi", "Free Breakfast", "Free Parking", "Kid-Friendly", "Swimming Pool", "Fitness Center"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4A84B]" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C4862A]">
                  About Us
                </p>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  A Legacy of Warmth & Excellence
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Nestled in the serene Olympia neighbourhood of Lusaka, Cosmic Executive Lodge offers a perfect blend of comfort, elegance, and African hospitality. Whether you are visiting for business or leisure, our lodge provides a tranquil retreat just minutes from the city centre.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  From our beautifully appointed rooms to our acclaimed restaurant and versatile event spaces, every detail is designed to make your stay unforgettable. We are conveniently located off Katima Mulilo Road, just 5 minutes from Arcades Shopping Mall and East Park Mall.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded bg-secondary p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-[#C4862A]">{"5 min"}</p>
                    <p className="text-sm text-muted-foreground">to Arcades Mall</p>
                  </div>
                  <div className="rounded bg-secondary p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-[#C4862A]">{"5 min"}</p>
                    <p className="text-sm text-muted-foreground">to East Park Mall</p>
                  </div>
                  <div className="rounded bg-secondary p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-[#C4862A]">{"5 min"}</p>
                    <p className="text-sm text-muted-foreground">to Mulungushi International Conference Centre</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded">
                  <Image
                    src="https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20indoor.webp"
                    alt="Elegant lobby interior"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-8 overflow-hidden rounded">
                  <Image
                    src="https://vzy6avnckm3cedxz.public.blob.vercel-storage.com/cosmic%20outdoor%201.webp"
                    alt="Lodge exterior"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C4862A]">
                What We Offer
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Our Services
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="group rounded bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded bg-[#C4862A]/10 text-[#C4862A] transition-colors group-hover:bg-[#C4862A] group-hover:text-white">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section id="gallery" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C4862A]">
                Explore Our Lodge
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Photo Gallery
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded ${
                    i === 0 || i === 7 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <div className={`relative ${i === 0 || i === 7 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#2C1810]/0 transition-colors group-hover:bg-[#2C1810]/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DINING & CATERING ===== */}
        <section id="dining" className="bg-[#2C1810] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A84B]">
                Fine Dining & Catering
              </p>
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
                A Culinary Experience
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#F5EDE0]/80">
                From our restaurant to your event venue, enjoy exceptional cuisine crafted with passion.
                We offer outside catering services for weddings, kitchen parties, conferences, workshops, and private parties.
              </p>
            </div>

            {/* Restaurant food */}
            <div className="mb-12">
              <h3 className="mb-6 text-center font-serif text-2xl font-bold text-[#D4A84B]">
                Our Restaurant
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {FOOD_IMAGES.map((img, i) => (
                  <div key={i} className="group relative overflow-hidden rounded">
                    <div className="relative aspect-square">
                      <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catering */}
            <div>
              <h3 className="mb-6 text-center font-serif text-2xl font-bold text-[#D4A84B]">
                Catering Services
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CATERING_IMAGES.map((img, i) => (
                  <div key={i} className="group relative overflow-hidden rounded">
                    <div className="relative aspect-[4/3]">
                      <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center text-lg text-[#F5EDE0]">
              Book us for your next event and enjoy our food!
            </p>
          </div>
        </section>

        {/* ===== EVENT CTA ===== */}
        <section className="relative overflow-hidden py-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20dining%20setup%201.png-Vnehxhpa3zbPVmmZxp6H5lbPEhHv1M.jpeg"
            alt="Event dining setup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2C1810]/70" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Planning Your Next Event?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[#F5EDE0]/90">
              From intimate gatherings to grand celebrations, we provide the perfect setting and exceptional catering for weddings, conferences, kitchen parties, workshops, and private events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:reservations@cosmiclodge.org"
                className="rounded bg-[#C4862A] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#D4A84B]"
              >
                Email for Booking
              </a>
              <a
                href="tel:+260966782179"
                className="rounded border-2 border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C4862A]">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Contact & Reservations
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {/* Phone */}
              <div className="flex items-start gap-4 rounded bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#C4862A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4862A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+260966782179" className="block text-muted-foreground hover:text-[#C4862A]">+260 966 782 179</a>
                  <a href="tel:+260978922474" className="block text-muted-foreground hover:text-[#C4862A]">+260 978 922 474</a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4 rounded bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#C4862A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4862A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:reservations@cosmiclodge.org" className="text-muted-foreground hover:text-[#C4862A]">reservations@cosmiclodge.org</a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start gap-4 rounded bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#C4862A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4862A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Olympia, Lubasenshi Close, off Katima Mulilo Road, Lusaka</p>
                  <a
                    href="https://maps.app.goo.gl/hxrrFoMtW4c9gmNe9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-[#C4862A] hover:text-[#D4A84B]"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              {/* Nearby */}
              <div className="flex items-start gap-4 rounded bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#C4862A]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4862A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Nearby</p>
                  <p className="text-muted-foreground">5 min to Arcades Shopping Mall</p>
                  <p className="text-muted-foreground">5 min to East Park Mall</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2C1810] py-16 text-[#F5EDE0]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20logo%20icons-D6pWbsuqKp1KZULGgBvwBlwGZnumMl.png"
                alt="Cosmic Lodge Logo"
                width={150}
                height={48}
                className="mb-4 h-10 w-auto brightness-110"
              />
              <p className="text-sm leading-relaxed text-[#F5EDE0]/70">
                Your home away from home. Experience exceptional hospitality in the heart of Lusaka, Zambia.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-serif text-lg font-bold text-[#D4A84B]">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-[#F5EDE0]/70 transition-colors hover:text-[#D4A84B]">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Services */}
            <div>
              <h4 className="mb-4 font-serif text-lg font-bold text-[#D4A84B]">Our Services</h4>
              <div className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <span key={s.title} className="text-sm text-[#F5EDE0]/70">{s.title}</span>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <h4 className="mb-4 font-serif text-lg font-bold text-[#D4A84B]">Contact Us</h4>
              <div className="flex flex-col gap-3 text-sm text-[#F5EDE0]/70">
                <a href="tel:+260966782179" className="hover:text-[#D4A84B]">+260 966 782 179</a>
                <a href="tel:+260978922474" className="hover:text-[#D4A84B]">+260 978 922 474</a>
                <a href="mailto:reservations@cosmiclodge.org" className="hover:text-[#D4A84B]">reservations@cosmiclodge.org</a>
                <p>Olympia, Lubasenshi Close, off Katima Mulilo Road, Lusaka</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#F5EDE0]/10 pt-8 text-center text-sm text-[#F5EDE0]/50">
            <p>Cosmic Executive Lodge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
