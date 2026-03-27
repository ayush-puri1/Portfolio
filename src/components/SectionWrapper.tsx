import GrainOverlay from "./GrainOverlay";

interface SectionWrapperProps {
  label: string;
  number: string;
  heading: string;
  children: React.ReactNode;
  bg: string;
  id?: string;
}

export default function SectionWrapper({
  label,
  number,
  heading,
  children,
  bg,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${bg}`}>
      <GrainOverlay />

      {/* Sticky heading */}
      <div className="pointer-events-none sticky top-20 z-20 px-8 pt-16 pb-8 md:px-16">
        <p className="font-outfit text-label font-semibold uppercase tracking-[0.22em] text-cream-ghost mb-3">
          {number} / {label}
        </p>
        <h2 className="font-cormorant font-black text-display-lg text-cream">
          {heading}
        </h2>
      </div>

      {/* Content card that scrolls over heading */}
      <div
        className="relative z-30 rounded-t-[20px] px-8 pt-8 pb-24 md:px-16"
        style={{
          background: "inherit",
          boxShadow: "0 -30px 60px rgba(0,0,0,0.35)",
        }}
      >
        {children}
      </div>

      {/* Decorative section number */}
      <span className="pointer-events-none absolute bottom-8 right-8 z-10 select-none font-cormorant text-[18rem] font-black leading-none text-white/[0.018]">
        {number}
      </span>
    </section>
  );
}
