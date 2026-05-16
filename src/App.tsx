import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InteractiveConsole from "./components/InteractiveConsole";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="min-h-screen selection:bg-m3-primary-container transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-m3-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      
      <Hero />
      
      <InteractiveConsole isDark={isDark} />
      
      <Features />

      {/* Tech Stack Section */}
      <section id="technology" className="py-32 px-6 bg-m3-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-m3-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Engineered Performance</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none font-serif">
              ZERO <br /> LATENCY.
            </h2>
            <p className="text-white/60 dark:text-white/60 text-lg mb-8 leading-relaxed">
              Our custom AR engine processes 4K video feeds at 120fps, synchronizing computer vision models with stadium metadata in under 15ms. 
              The result is a digital layer that feels physically grounded in the real pitch.
            </p>
            <ul className="space-y-4">
              {['Object Detection Level 4', 'Real-time Ball Tracking', 'Stadium Geo-fencing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-m3-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square m3-card flex items-center justify-center p-12 group">
            <div className="absolute inset-0 bg-m3-primary/5 rounded-full animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-full border border-m3-primary/20 flex flex-col items-center justify-center text-center">
              <div className="text-8xl font-mono font-bold text-m3-primary mb-2 tracking-tighter">15ms</div>
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Total Pipeline Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[var(--border)] mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="text-2xl font-bold tracking-tight uppercase mb-6 font-serif">
              Cric<span className="text-m3-primary italic">AR</span>
            </div>
            <p className="text-white/40 text-xs tracking-wider uppercase font-medium leading-loose">
              Redefining sports spectatorship through high-precision augmented reality. Stadium seating will never be the same.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Product</div>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-m3-primary transition-colors">Experience</a></li>
                <li><a href="#" className="hover:text-m3-primary transition-colors">SDK</a></li>
                <li><a href="#" className="hover:text-m3-primary transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Company</div>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-m3-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-m3-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-m3-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

