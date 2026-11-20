import { ArrowUpRight, CalendarClock } from "lucide-react";
import { MINISTRIES } from "../data/content";
import { SectionHeading, Stagger, StaggerItem } from "./motion";

export default function Ministries() {
  return (
    <section id="ministries" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get Involved"
          title={
            <>
              Ministries That <span className="text-gold-gradient italic">Serve & Grow</span>
            </>
          }
          description="From our youngest worshippers to our outreach teams serving the city — there is a place for your gifts and your heart."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
          {MINISTRIES.map((ministry) => (
            <StaggerItem key={ministry.name}>
              <article className="group relative h-[380px] overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(20,18,16,0.15)]">
                <img
                  src={ministry.image}
                  alt={ministry.name}
                  className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                {/* Gradient that deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/10 transition-all duration-700 group-hover:via-ink/55" />

                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-ivory/15 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-md">
                    <CalendarClock className="h-3.5 w-3.5 text-gold-light" />
                    {ministry.schedule}
                  </span>

                  <h3 className="font-serif text-[28px] font-medium leading-tight text-ivory">
                    {ministry.name}
                  </h3>

                  {/* Description slides up on hover */}
                  <div className="grid grid-rows-[0fr] transition-all duration-700 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-[15px] font-light leading-relaxed text-ivory/80">
                        {ministry.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                        Learn More
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gold corner accent */}
                <span className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-gold/80 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
