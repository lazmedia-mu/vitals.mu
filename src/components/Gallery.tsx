import { Camera } from "lucide-react";
import { GALLERY } from "../data/content";
import { SectionHeading, Stagger, StaggerItem } from "./motion";

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Life at Grace Harbor"
          title={
            <>
              Moments of <span className="text-gold-gradient italic">Faith & Fellowship</span>
            </>
          }
          description="A glimpse into the worship, service, and joy that fill our halls each week."
        />

        <Stagger className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4" gap={0.08}>
          {GALLERY.map((item) => (
            <StaggerItem
              key={item.src}
              className={
                item.span === "wide"
                  ? "col-span-2"
                  : item.span === "tall"
                    ? "row-span-2"
                    : ""
              }
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(20,18,16,0.12)]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="img-warm h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-600 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-medium text-ivory">
                    <Camera className="h-4 w-4 text-gold-light" />
                    {item.alt}
                  </span>
                </figcaption>
                {/* Gold frame sweep */}
                <span className="pointer-events-none absolute inset-3 rounded-xl border border-gold/0 transition-all duration-700 group-hover:border-gold/60" />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
