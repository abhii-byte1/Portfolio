import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import RecentWorks from './components/RecentWorks';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0d1116] min-h-screen text-white font-sans selection:bg-[#00df8f] selection:text-[#0d1116]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <RecentWorks />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
