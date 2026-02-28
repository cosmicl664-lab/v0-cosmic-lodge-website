import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20outdoor-UWsDvppZVCxAOwO7WgJSueSeyBIvGT.png",
    alt: "Cosmic Lodge exterior with pool area",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20room-ezBPkf3TZWRIUnEgjruDNZoFafo0Ge.png",
    alt: "Luxury executive bedroom",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20pool-KSNYaAMFBjhC8BGSOVIBmt6mdju7ey.png",
    alt: "Swimming pool area",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20restuarant-GlmZq5a4M4R9Q9PU1hJQDFolJDXhOZ.png",
    alt: "Restaurant with elegant table setting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20dining%20setup.png-M4e6C40YRTFJxRcji6YZzuCJPs6ttQ.jpeg",
    alt: "Elegant event dining setup with candles and flowers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20indoor-PtJqO3FYIG7y3rSxeWUakPEXXesZ5n.png",
    alt: "Interior lobby with ornate staircase",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmic%20dining%20setup%201.png-Vnehxhpa3zbPVmmZxp6H5lbPEhHv1M.jpeg",
    alt: "Colorful restaurant dining area",
    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Take a Look
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Our Gallery</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Explore the elegant spaces that make Cosmic Executive Lodge a truly special
            destination.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[250px] md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-sm`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-primary-foreground">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
