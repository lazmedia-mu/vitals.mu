import { Clock, ArrowUpRight } from "lucide-react";
import { SERVICE_TIMES } from "../data/content";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "./motion";

export default function ServiceTimes() {
  return (
    <section id="services" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Gather With Us"
          title={
            <>
              Service <span className="text-gold-gradient italic">Times</span>
            </>
          }
          description="Four weekly rhythms of worship, study, and prayer — each one an open door. Find the gathering that fits your season of life."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
          {SERVICE_TIMES.map((service) => (
            <StaggerItem key={service.name}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ivory/10 bg-ink-soft p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_25px_60px_rgba(193,154,61,0.18)]">
                {/* Top gold line sweep */}
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep transition-transform duration-700 group-hover:scale-x-100" />

                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl font-light text-ivory/15 transition-colors duration-500 group-hover:text-gold/30">
                    {service.day.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-medium text-ivory">{service.name}</h3>

                <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gold-light">
                  <Clock className="h-4 w-4" />
                  {service.time}
                </p>

                <p className="mt-4 text-[15px] font-light leading-relaxed text-ivory/60">
                  {service.description}
                </p>

                <a
                  href="#visit"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-300 group-hover:text-gold-light"
                >
                  Join Us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Live stream banner */}
        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent px-8 py-7 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
              </span>
              <p className="text-center font-light text-ivory/85 sm:text-left">
                <span className="font-medium text-ivory">Can't make it in person?</span> Every
                Sunday service streams live — join us from anywhere in the world.
              </p>
            </div>
            <a
              href="#sermons"
              className="shrink-0 rounded-full border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              Watch Live
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
