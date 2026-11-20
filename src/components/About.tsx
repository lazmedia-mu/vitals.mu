import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { IMAGES, STATS } from "../data/content";
import { Reveal, Counter, ClipReveal, Stagger, StaggerItem } from "./motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      {/* Decorative background word */}
      <span className="pointer-events-none absolute -right-8 top-10 select-none font-serif text-[22vw] font-bold leading-none text-ink/[0.035]">
        Grace
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image composition */}
          <div className="relative">
            <ClipReveal>
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(20,18,16,0.25)]">
                <motion.img
                  src={IMAGES.nave}
                  alt="Interior nave of Grace Harbor Church"
                  style={{ y: imgY }}
                  className="img-warm aspect-[4/5] w-full scale-[1.18] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
              </div>
            </ClipReveal>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-10 -right-3 w-52 sm:-right-8 sm:w-64"
            >
              <motion.div style={{ y: imgY2 }} className="overflow-hidden rounded-2xl border-[6px] border-ivory shadow-[0_25px_60px_rgba(20,18,16,0.35)]">
                <img
                  src={IMAGES.prayingPews}
                  alt="Congregation praying in the pews"
                  className="img-warm aspect-[4/3] w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating verse card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-3 top-8 max-w-[240px] rounded-2xl bg-ink p-5 text-ivory shadow-[0_20px_50px_rgba(20,18,16,0.4)] sm:-left-8"
            >
              <Quote className="mb-3 h-6 w-6 text-gold-light" />
              <p className="font-accent text-base italic leading-snug">
                “By grace you have been saved, through faith.”
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold-light">
                Ephesians 2:8
              </p>
            </motion.div>
          </div>

          {/* Text content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-deep">
                <span className="hairline w-10" />
                Welcome Home
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
                A Church Rooted in Grace,
                <span className="text-gold-gradient block italic">Growing in Faith</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink/70">
                For over 125 years, Grace Harbor has been a lighthouse of hope in the heart of
                Portland. We believe everyone has a story, and every story matters to God. Whether
                you're exploring faith for the first time or looking to deepen your walk with
                Christ, there is a seat saved for you here.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-lg font-light leading-relaxed text-ink/70">
                Our mission is simple: to know Christ and make Him known — through worship that
                lifts the heart, teaching that transforms the mind, and community that embraces
                every person.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Authentic Worship", "Biblical Teaching", "Real Community"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gold-deep"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href="#ministries"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-deep"
              >
                <span className="link-sweep">Discover Our Ministries</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-ivory transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Stagger className="mt-28 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gold/20 shadow-[0_20px_60px_rgba(20,18,16,0.12)] lg:grid-cols-4" gap={0.1}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="bg-cream">
              <div className="group flex flex-col items-center gap-2 px-6 py-10 text-center transition-colors duration-500 hover:bg-ink">
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  className="font-serif text-5xl font-semibold text-gold-deep transition-colors duration-500 group-hover:text-gold-light sm:text-6xl"
                />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/55 transition-colors duration-500 group-hover:text-ivory/70">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
