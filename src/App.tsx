import { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import HeroImage from './components/HeroImage';
import FooterMarquee from './components/FooterMarquee';
import InfoDrawer from './components/InfoDrawer';

const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col bg-[#030014] selection:bg-[#CCFF00] selection:text-black font-sans">
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-[#030014]" />}>
        <ParticleBackground />
      </Suspense>
      <HeroImage />
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      
      <main className="relative flex-1 flex flex-col z-20 w-full h-full pointer-events-none">
        <HeroContent />
      </main>

      <FooterMarquee />
      
      <InfoDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

export default App;
