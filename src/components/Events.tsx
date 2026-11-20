import { MapPin, Clock, ArrowRight } from "lucide-react";
import { EVENTS, IMAGES } from "../data/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Parallax-ish background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={IMAGES.gothic}
          alt=""
          aria-hidden
          className="img-warm h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left: heading + CTA */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
                <span className="hairline w-10" />
                Mark Your Calendar
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Upcoming <span className="text-gold-gradient italic">Events</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-ivory/65">
                Gatherings, celebrations, and opportunities to serve — there's always something
                happening at Grace Harbor. Come as you are, and bring a friend.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#visit"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_12px_40px_rgba(193,154,61,0.45)]"
              >
                View Full Calendar
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={0.45} className="mt-12 hidden lg:block">
              <div className="overflow-hidden rounded-3xl border border-ivory/10">
                <img
                  src={IMAGES.worshipHands}
                  alt="Worshippers with hands raised"
                  className="img-warm aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: event list */}
          <Stagger className="flex flex-col gap-4" gap={0.12}>
            {EVENTS.map((event) => (
              <StaggerItem key={event.title}>
                <article className="group flex gap-5 rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:bg-ivory/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:gap-7 sm:p-6">
                  {/* Date badge */}
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-gold px-4 py-3 text-ink shadow-[0_10px_30px_rgba(193,154,61,0.35)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                    <span className="font-serif text-3xl font-bold leading-none sm:text-4xl">
                      {event.day}
                    </span>
                    <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.25em]">
                      {event.month}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl font-medium text-ivory transition-colors duration-300 group-hover:text-gold-light sm:text-2xl">
                      {event.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-ivory/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-gold-light" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gold-light" />
                        {event.location}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[15px] font-light leading-relaxed text-ivory/60">
                      {event.description}
                    </p>
                  </div>

                  <span className="hidden shrink-0 self-center sm:flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
