import { motion } from "motion/react";
import { Cpu, Zap, Radio } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass"
    >
      <div className="flex items-center gap-2">
        <div className="p-1 rounded-lg bg-accent/20">
          <Radio className="w-6 h-6 text-accent" />
        </div>
        <span className="text-xl font-extrabold tracking-tighter text-white font-sans uppercase">
          Cric<span className="text-accent italic">AR</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-white/60 uppercase">
        <a href="#features" className="hover:text-accent transition-colors">Features</a>
        <a href="#live" className="hover:text-accent transition-colors">Live Demo</a>
        <a href="#technology" className="hover:text-accent transition-colors">Tech</a>
      </div>

      <button className="px-6 py-2 text-xs font-bold tracking-widest uppercase border border-accent/50 rounded-full hover:bg-accent hover:text-black transition-all">
        Get App
      </button>
    </motion.nav>
  );
}
