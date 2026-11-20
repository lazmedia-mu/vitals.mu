import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Mail, Phone, Send, CheckCircle2, Coffee, Baby, Car } from "lucide-react";
import { IMAGES } from "../data/content";
import { Reveal, EASE } from "./motion";

const PERKS = [
  { icon: Coffee, label: "Free coffee & pastries" },
  { icon: Baby, label: "Kids check-in & nursery" },
  { icon: Car, label: "Reserved guest parking" },
];

export default function VisitUs() {
  const [form, setForm] = useState({ name: "", email: "", service: "9:00 AM", guests: "Just me" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="visit" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-25">
        <img src={IMAGES.stainedLow} alt="" aria-hidden className="img-warm h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
                <span className="hairline w-10" />
                First Time? Start Here
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
                Plan Your <span className="text-gold-gradient italic">Visit</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-ivory/70">
                Visiting a new church can feel daunting — we get it. Let us know you're coming and
                a member of our welcome team will meet you at the door, save you a seat, and answer
                any questions. No strings, no pressure — just a warm welcome.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {PERKS.map((perk) => (
                  <span
                    key={perk.label}
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/5 px-4 py-2.5 text-sm text-ivory/85 backdrop-blur transition-colors duration-300 hover:border-gold/60 hover:text-gold-light"
                  >
                    <perk.icon className="h-4 w-4 text-gold-light" />
                    {perk.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <ul className="mt-10 space-y-4 text-ivory/75">
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-[0.2em] text-ivory/45">Location</span>
                    1200 Harbor Lane, Portland, OR 97209
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-[0.2em] text-ivory/45">Services</span>
                    Sundays at 9:00 AM & 11:00 AM
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-[0.2em] text-ivory/45">Email</span>
                    hello@graceharbor.church
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-[0.2em] text-ivory/45">Phone</span>
                    (503) 555-0147
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal delay={0.25}>
            <div className="relative overflow-hidden rounded-[2rem] border border-ivory/10 bg-ivory/[0.06] p-7 backdrop-blur-xl sm:p-10">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-ink"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.span>
                    <h3 className="mt-7 font-serif text-3xl font-medium text-ivory">
                      We can't wait to meet you, {form.name.split(" ")[0] || "friend"}!
                    </h3>
                    <p className="mt-3 max-w-sm font-light leading-relaxed text-ivory/70">
                      Our welcome team will reach out to <span className="text-gold-light">{form.email}</span> before
                      Sunday. Look for the gold "Guest" sign at the main entrance — we'll be there
                      to greet you.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light underline-offset-4 hover:underline"
                    >
                      Plan another visit
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <h3 className="font-serif text-3xl font-medium text-ivory">We're Saving You a Seat</h3>
                    <p className="mt-2 text-sm font-light text-ivory/60">
                      Tell us when you're coming — it takes less than a minute.
                    </p>

                    <div className="mt-8 space-y-5">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                          Your Name
                        </label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full rounded-xl border border-ivory/15 bg-ink/50 px-4 py-3.5 text-ivory placeholder:text-ivory/30 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/25"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full rounded-xl border border-ivory/15 bg-ink/50 px-4 py-3.5 text-ivory placeholder:text-ivory/30 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/25"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                            Service Time
                          </label>
                          <div className="flex gap-2">
                            {["9:00 AM", "11:00 AM"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setForm({ ...form, service: t })}
                                className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-300 ${
                                  form.service === t
                                    ? "border-gold bg-gold text-ink"
                                    : "border-ivory/15 bg-ink/50 text-ivory/70 hover:border-gold/50"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
                            Party Size
                          </label>
                          <div className="flex gap-2">
                            {["Just me", "2–4", "5+"].map((g) => (
                              <button
                                key={g}
                                type="button"
                                onClick={() => setForm({ ...form, guests: g })}
                                className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-300 ${
                                  form.guests === g
                                    ? "border-gold bg-gold text-ink"
                                    : "border-ivory/15 bg-ink/50 text-ivory/70 hover:border-gold/50"
                                }`}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_15px_45px_rgba(193,154,61,0.45)]"
                      >
                        Reserve My Visit
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </button>
                      <p className="text-center text-xs text-ivory/40">
                        We respect your privacy — your details are only used to prepare your welcome.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
