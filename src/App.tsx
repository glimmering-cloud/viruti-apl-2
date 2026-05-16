import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InteractiveConsole from "./components/InteractiveConsole";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-accent/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <Hero />
      
      <InteractiveConsole />
      
      <Features />

      {/* Tech Stack Section */}
      <section id="technology" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Engineered Performance</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              ZERO <br /> LATENCY.
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Our custom AR engine processes 4K video feeds at 120fps, synchronizing computer vision models with stadium metadata in under 15ms. 
              The result is a digital layer that feels physically grounded in the real pitch.
            </p>
            <ul className="space-y-4">
              {['Object Detection Level 4', 'Real-time Ball Tracking', 'Stadium Geo-fencing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square glass rounded-full flex items-center justify-center p-12 group">
            <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-full border border-accent/20 flex flex-col items-center justify-center text-center">
              <div className="text-8xl font-mono font-bold text-accent mb-2 tracking-tighter">15ms</div>
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Total Pipeline Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="text-2xl font-extrabold tracking-tighter uppercase mb-6 italic">
              Cric<span className="text-accent">AR</span>
            </div>
            <p className="text-white/40 text-xs tracking-wider uppercase font-medium leading-loose">
              Redefining sports spectatorship through high-precision augmented reality. Stadium seating will never be the same.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Product</div>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">Experience</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">SDK</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Company</div>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <div>© 2026 CricAR Systems. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

