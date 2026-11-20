import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Easing presets ---------- */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_SLOW = [0.16, 1, 0.3, 1] as const;

/* ---------- Fade-up reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Staggered container + item ---------- */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Clip reveal (curtain wipe) ---------- */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, delay, ease: EASE_SLOW }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- Section heading with eyebrow ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignCls}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.35em] ${
            dark ? "text-gold-light" : "text-gold-deep"
          }`}
        >
          <span className="hairline w-10" />
          {eyebrow}
          <span className="hairline w-10" />
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-medium ${
            dark ? "text-ivory" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={`text-base sm:text-lg leading-relaxed font-light ${
              dark ? "text-ivory/70" : "text-ink/65"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
