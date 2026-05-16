import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-m3-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase border border-m3-primary/20 rounded-full bg-m3-primary/5 text-m3-primary mb-8 animate-fade-in shadow-sm">
          The Future of Stadium Experiences
        </span>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-10 leading-[0.85] font-serif">
          SEE THE GAME <br /> 
          <span className="text-m3-primary italic">BEYOND REALITY</span>
        </h1>
        
        <p className="text-[var(--fg)] opacity-60 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans font-medium">
          Professional-grade analytics directly onto your field of vision. 
          Real-time tracking, all in the palm of your hand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4.5 bg-m3-primary text-white font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-m3-primary/20">
            Start Experience <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-10 py-4.5 m3-card bg-[var(--card)] text-[var(--fg)] font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-3 hover:bg-m3-primary/5 transition-all shadow-md">
            <Play className="w-4 h-4 fill-current" /> Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Hero Visual Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative w-full max-w-6xl mt-24 aspect-video rounded-[56px] overflow-hidden m3-card border-[var(--border)] group shadow-2xl transition-all duration-700"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-at-night-4286-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        {/* AR UI Mock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full p-8 md:p-16 pointer-events-none">
                {/* Floating Tags */}
                <div className="absolute top-[20%] left-[30%] p-3 glass rounded-[20px] flex items-center gap-3 border-m3-primary/30 shadow-2xl scale-90 md:scale-110">
                    <div className="w-10 h-10 rounded-full bg-m3-primary/30 border border-m3-primary flex items-center justify-center text-[11px] font-bold text-white">VK</div>
                    <div>
                        <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest leading-none mb-1">In-Play</div>
                        <div className="text-sm font-bold leading-none text-white font-sans">Virat Kohli</div>
                    </div>
                </div>

                {/* Tracking Circle Mock */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-m3-primary/20 pointer-events-none">
                   <div className="absolute inset-0 border-[0.5px] border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-m3-primary rounded-full shadow-[0_0_10px_#006492] animate-pulse" />
                </div>

                {/* Side Stats */}
                <div className="absolute bottom-12 left-12 flex flex-col gap-4">
                    <div className="px-6 py-4 glass rounded-[24px] border-white/10">
                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Exit Velo</div>
                        <div className="text-2xl font-bold text-m3-primary font-mono tracking-tight">104.2 <span className="text-xs font-normal">MPH</span></div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
