import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";
import { IMAGES } from "../data/content";
import { EASE, EASE_SLOW } from "./motion";

const HEADLINE = ["A", "Place", "to", "Belong,", "a", "Faith", "to", "Call", "Home"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative flex min-h-svh items-center justify-center overflow-hidden bg-ink"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <motion.img
          src={IMAGES.hero}
          alt="Stained glass windows glowing in a cathedral"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE_SLOW }}
          className="img-warm h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(20,18,16,0.55)_100%)]" />

      {/* Floating light orbs */}
      <div className="animate-pulse-soft absolute left-[12%] top-[28%] h-24 w-24 rounded-full bg-gold/25 blur-3xl" />
      <div className="animate-pulse-soft absolute right-[15%] top-[55%] h-32 w-32 rounded-full bg-gold/20 blur-3xl [animation-delay:1.2s]" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-5xl px-5 pt-32 pb-24 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/40 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-light animate-pulse-soft" />
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
            Est. 1901 · All Are Welcome
          </span>
        </motion.div>

        <h1 className="font-serif text-[13vw] sm:text-7xl lg:text-[92px] font-medium leading-[1.04] text-ivory">
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-3 -mb-3 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.75 + i * 0.07, ease: EASE }}
              >
                {word}
                {i < HEADLINE.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl font-accent text-xl sm:text-2xl italic leading-relaxed text-ivory/85"
        >
          “For where two or three gather in my name, there am I with them.”
          <span className="mt-2 block text-sm not-italic tracking-[0.25em] uppercase text-gold-light/90">
            Matthew 18:20
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#visit"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-shadow duration-500 hover:shadow-[0_15px_45px_rgba(193,154,61,0.5)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Plan Your Visit</span>
          </a>
          <a
            href="#sermons"
            className="inline-flex items-center gap-3 rounded-full border border-ivory/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ivory backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-ivory/10 hover:text-gold-light"
          >
            Watch Sermons
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/70"
        >
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold-light" />
            Sundays · 9:00 AM & 11:00 AM
          </span>
          <span className="hidden h-4 w-px bg-ivory/25 sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-light" />
            1200 Harbor Lane, Portland, OR
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory/80 backdrop-blur-sm transition-colors hover:border-gold hover:text-gold-light"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
