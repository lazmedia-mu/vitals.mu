import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Church, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { EASE } from "./motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] py-3"
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleClick("#home")}
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-ink/40 backdrop-blur transition-transform duration-500 group-hover:rotate-[360deg]">
              <Church className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg sm:text-xl font-semibold tracking-wide text-ivory">
                Grace Harbor
              </span>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-gold-light/90">
                Community Church
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`link-sweep text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === link.href ? "active text-gold-light" : "text-ivory/85 hover:text-ivory"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => handleClick("#visit")}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(193,154,61,0.45)]"
            >
              Plan a Visit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/97 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE }}
                  className={`font-serif text-4xl font-medium transition-colors ${
                    active === link.href ? "text-gold-light" : "text-ivory hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#visit"
                onClick={() => handleClick("#visit")}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.07, duration: 0.5, ease: EASE }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink"
              >
                Plan a Visit
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-ivory/40"
            >
              Sundays · 9:00 & 11:00 AM
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
