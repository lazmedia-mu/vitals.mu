import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIES, IMAGES } from "../data/content";
import { SectionHeading, EASE } from "./motion";

export default function Testimonies() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = (dir: number) =>
    setIndex(([i]) => [(i + dir + TESTIMONIES.length) % TESTIMONIES.length, dir]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const current = TESTIMONIES[index];

  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Stories of Grace"
          title={
            <>
              Lives <span className="text-gold-gradient italic">Transformed</span>
            </>
          }
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Decorative quote mark */}
          <Quote className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 text-gold/20" />

          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <blockquote className="max-w-3xl font-accent text-2xl font-medium italic leading-relaxed text-ink/85 sm:text-[32px]">
                  “{current.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block font-serif text-xl font-semibold text-gold-deep">
                    {current.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.3em] text-ink/50">
                    {current.role}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimony"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {TESTIMONIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimony ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index ? "w-10 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimony"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom image strip */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-3 gap-4 overflow-hidden rounded-3xl">
          {[IMAGES.congregation, IMAGES.icon, IMAGES.donation].map((src, i) => (
            <div key={i} className="group relative overflow-hidden">
              <img
                src={src}
                alt="Church community moments"
                className="img-warm aspect-[4/3] w-full object-cover transition-transform duration-[1.3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
