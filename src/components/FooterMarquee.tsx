export default function FooterMarquee() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30 pointer-events-none pb-2 sm:pb-4 opacity-70 mix-blend-difference">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        <div className="flex whitespace-nowrap shrink-0">
          <span className="font-display text-[10vw] leading-none uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
            EATHAN ROY // CREATIVE DIRECTOR //&nbsp;
          </span>
          <span className="font-display text-[10vw] leading-none uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
            EATHAN ROY // CREATIVE DIRECTOR //&nbsp;
          </span>
        </div>
        <div className="flex whitespace-nowrap shrink-0">
          <span className="font-display text-[10vw] leading-none uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
            EATHAN ROY // CREATIVE DIRECTOR //&nbsp;
          </span>
          <span className="font-display text-[10vw] leading-none uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
            EATHAN ROY // CREATIVE DIRECTOR //&nbsp;
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
