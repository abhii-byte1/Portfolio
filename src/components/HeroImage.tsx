export default function HeroImage() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full h-[85vh] md:h-[110vh] max-w-[1200px] pointer-events-none flex justify-center items-end">
      <img 
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_main_1.png.png" 
        alt="Eathan"
        className="h-full w-auto object-contain object-bottom pointer-events-auto transition-transform duration-700 ease-out hover:scale-[1.04] brightness-95 grayscale contrast-125 drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
