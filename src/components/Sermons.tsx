import { Play, CalendarDays, BookOpen, ArrowRight } from "lucide-react";
import { SERMONS } from "../data/content";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "./motion";

export default function Sermons() {
  const [featured, ...rest] = SERMONS;

  return (
    <section id="sermons" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <span className="pointer-events-none absolute -left-10 bottom-0 select-none font-serif text-[20vw] font-bold leading-none text-ink/[0.03]">
        Word
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent Messages"
          title={
            <>
              Sermons & <span className="text-gold-gradient italic">Teachings</span>
            </>
          }
          description="Missed a Sunday? Catch up on the latest messages — each one rooted in Scripture and crafted for everyday life."
        />

        {/* Featured sermon */}
        <Reveal className="mt-16">
          <article className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(20,18,16,0.3)]">
            <img
              src={featured.image}
              alt={featured.title}
              className="img-warm h-[480px] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 sm:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                  Latest Message
                </span>
                <span className="rounded-full border border-ivory/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur">
                  {featured.series}
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
                {featured.title}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ivory/75">
                <span>{featured.speaker}</span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold-light" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold-light" /> {featured.scripture}
                </span>
                <span>{featured.duration}</span>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <button className="group/btn inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_12px_40px_rgba(193,154,61,0.5)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-gold-light transition-transform duration-300 group-hover/btn:scale-110">
                    <Play className="ml-0.5 h-3 w-3 fill-current" />
                  </span>
                  Watch Now
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ivory backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold-light">
                  Sermon Notes
                </button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Sermon grid */}
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.12}>
          {rest.map((sermon) => (
            <StaggerItem key={sermon.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-ivory shadow-[0_15px_45px_rgba(20,18,16,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(20,18,16,0.16)]">
                <div className="relative overflow-hidden">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="img-warm aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <button
                    aria-label={`Play ${sermon.title}`}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-gold text-ink opacity-0 shadow-[0_10px_35px_rgba(193,154,61,0.6)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium text-ivory backdrop-blur">
                    {sermon.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-deep">
                    {sermon.series}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-gold-deep">
                    {sermon.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/55">
                    {sermon.speaker} · {sermon.date}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink/65">
                    <BookOpen className="h-4 w-4 text-gold" />
                    {sermon.scripture}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}

          {/* Browse all card */}
          <StaggerItem>
            <a
              href="#events"
              className="group flex h-full min-h-[280px] flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-gold/40 bg-gold/5 p-8 text-center transition-all duration-500 hover:border-gold hover:bg-gold/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold-light transition-transform duration-500 group-hover:rotate-45">
                <ArrowRight className="h-6 w-6" />
              </span>
              <span className="font-serif text-2xl font-medium text-ink">Browse the Archive</span>
              <span className="max-w-[220px] text-sm font-light text-ink/60">
                500+ messages from our pulpit, searchable by scripture, series, or speaker.
              </span>
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
