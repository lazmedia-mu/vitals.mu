import { Church, ArrowUp, Heart } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { Reveal } from "./motion";

const FacebookIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8Z" />
  </svg>
);

const InstagramIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
    <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
  </svg>
);

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
    <path d="M17.8 4h2.7l-6 6.8L21.5 20h-5.5l-4.3-5.6L6.7 20H4l6.4-7.3L3.7 4h5.7l3.9 5.1L17.8 4Zm-1 14.4h1.5L8.6 5.5H7l9.8 12.9Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d0b09] text-ivory">
      {/* Top gold hairline */}
      <div className="hairline" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <Reveal>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ink">
                <Church className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-2xl font-semibold">Grace Harbor</span>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-gold-light/90">
                  Community Church
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm font-light leading-relaxed text-ivory/55">
              A place to belong and a faith to call home. Join us Sundays at 9:00 and 11:00 AM —
              everyone is welcome at the table.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: YoutubeIcon, label: "YouTube" },
                { icon: XIcon, label: "X" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Explore</h4>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-light text-ivory/60 transition-all duration-300 hover:pl-1.5 hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Ministries */}
          <Reveal delay={0.2}>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Ministries</h4>
            <ul className="mt-6 space-y-3">
              {["Children's Ministry", "Youth & Students", "Worship & Arts", "Outreach & Missions", "Prayer Ministry", "Care & Compassion"].map(
                (m) => (
                  <li key={m}>
                    <a
                      href="#ministries"
                      className="text-[15px] font-light text-ivory/60 transition-all duration-300 hover:pl-1.5 hover:text-gold-light"
                    >
                      {m}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Reveal>

          {/* Service times */}
          <Reveal delay={0.3}>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Gatherings</h4>
            <ul className="mt-6 space-y-4 text-[15px] font-light text-ivory/60">
              <li className="flex justify-between gap-4 border-b border-ivory/10 pb-3">
                <span>Sunday Worship</span>
                <span className="text-ivory/85">9 & 11 AM</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-ivory/10 pb-3">
                <span>Bible Study</span>
                <span className="text-ivory/85">Wed 7 PM</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-ivory/10 pb-3">
                <span>Prayer Night</span>
                <span className="text-ivory/85">Fri 6:30 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Youth Gathering</span>
                <span className="text-ivory/85">Sat 5 PM</span>
              </li>
            </ul>
            <a
              href="#home"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-ink">
                <ArrowUp className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-sm text-ivory/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Grace Harbor Community Church. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            Made with <Heart className="h-4 w-4 fill-gold text-gold" /> and faith in Portland, OR
          </p>
        </div>
      </div>
    </footer>
  );
}
