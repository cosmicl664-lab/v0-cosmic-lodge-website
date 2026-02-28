"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+260966782179"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+260 966 782 179</span>
            </a>
            <a
              href="mailto:reservations@cosmiclodge.org"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">reservations@cosmiclodge.org</span>
            </a>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-accent"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20logo%20icons-D6pWbsuqKp1KZULGgBvwBlwGZnumMl.png"
              alt="Cosmic Lodge Logo"
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
            >
              Reservations
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-border bg-card px-4 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-sm bg-primary px-6 py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
              >
                Reservations
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
