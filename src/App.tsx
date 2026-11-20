import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Church } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VerseMarquee from "./components/VerseMarquee";
import About from "./components/About";
import ServiceTimes from "./components/ServiceTimes";
import Sermons from "./components/Sermons";
import Ministries from "./components/Ministries";
import Events from "./components/Events";
import Testimonies from "./components/Testimonies";
import Gallery from "./components/Gallery";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import { EASE } from "./components/motion";

/* ---------- Preloader ---------- */
function Preloader({ done }: { done: () => void }) {
  useEffect(() => {
    const t = setTimeout(done, 1800);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative flex h-24 w-24 items-center justify-center"
      >
        <motion.span
          className="absolute inset-0 rounded-full border border-gold/50"
          animate={{ scale: [1, 1.25], opacity: [0.8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-ink-soft">
          <Church className="h-11 w-11 text-gold-light" strokeWidth={1.2} />
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
        className="mt-8 font-serif text-3xl font-medium tracking-wide text-ivory"
      >
        Grace Harbor
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="mt-2 text-[11px] uppercase tracking-[0.45em] text-gold-light"
      >
        Community Church
      </motion.p>

      {/* Loading bar */}
      <div className="mt-10 h-px w-48 overflow-hidden bg-ivory/15">
        <motion.div
          className="h-full bg-gold"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-ivory">
      <AnimatePresence>{loading && <Preloader done={() => setLoading(false)} />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <VerseMarquee />
        <About />
        <ServiceTimes />
        <Sermons />
        <Ministries />
        <Events />
        <Testimonies />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
