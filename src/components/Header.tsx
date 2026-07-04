import { Menu } from 'lucide-react';

interface HeaderProps {
  onOpenDrawer: () => void;
}

export default function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 py-6 sm:px-10 mix-blend-difference pointer-events-auto">
      {/* Logo Area */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-widest text-white">
          Eathan
        </h1>
        <div className="w-10 h-10 bg-[#CCFF00] rounded-full flex items-center justify-center text-black transition-transform duration-500 ease-out group-hover:rotate-180">
          <span className="text-xl leading-none -mt-0.5">✦</span>
        </div>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-white/70">
        <a href="#archive" className="hover:text-[#CCFF00] transition-colors tracking-widest">ARCHIVE</a>
        <a href="#process" className="hover:text-[#CCFF00] transition-colors tracking-widest">PROCESS</a>
        <a href="#labs" className="hover:text-[#CCFF00] transition-colors tracking-widest">LABS</a>
      </nav>

      {/* Action Area */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenDrawer}
          className="hidden sm:block font-mono text-xs px-5 py-3 border border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors tracking-widest rounded-full uppercase"
        >
          Commission
        </button>
        <button 
          onClick={onOpenDrawer}
          className="sm:hidden text-white hover:text-[#CCFF00] transition-colors p-2"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
