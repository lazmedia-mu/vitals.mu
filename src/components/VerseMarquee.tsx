import { VERSES } from "../data/content";

export default function VerseMarquee() {
  const doubled = [...VERSES, ...VERSES];
  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-ink py-5">
      <div className="animate-marquee flex w-max items-center gap-14 pr-14">
        {doubled.map((verse, i) => (
          <span key={i} className="flex items-center gap-14 whitespace-nowrap">
            <span className="font-accent text-lg sm:text-xl italic text-ivory/85">{verse}</span>
            <span className="text-gold text-xs">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
