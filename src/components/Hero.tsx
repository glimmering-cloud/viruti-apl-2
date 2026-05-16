import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <span className="inline-block px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-accent/30 rounded-full bg-accent/5 text-accent mb-6">
          The Future of Stadium Experiences
        </span>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.9]">
          SEE THE GAME <br /> 
          <span className="text-gradient">BEYOND REALITY</span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          CricAR overlays professional-grade analytics directly onto your field of vision. 
          Real-time player tracking, trajectory paths, and deeper insights, all in the palm of your hand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Start Experience <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <Play className="w-4 h-4" /> Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Hero Visual Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative w-full max-w-5xl mt-20 aspect-video rounded-3xl overflow-hidden glass border-white/5 group shadow-2xl shadow-accent/10"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stadium-lights-at-night-4286-large.mp4" type="video/mp4" />
        </video>
        
        {/* AR UI Mock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full p-6 md:p-12 bg-black/20 pointer-events-none">
                {/* Floating Tags */}
                <div className="absolute top-1/4 left-1/3 p-2 glass rounded-lg flex items-center gap-2 scale-75 md:scale-100">
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-[10px] font-bold">VK</div>
                    <div>
                        <div className="text-[10px] text-white/50 font-bold uppercase leading-none">Batsman</div>
                        <div className="text-xs font-bold leading-none">V. Kohli</div>
                    </div>
                </div>

                <div className="absolute top-1/2 right-1/4 p-2 glass rounded-lg flex items-center gap-2 scale-75 md:scale-100">
                    <div className="w-8 h-8 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center text-[10px] font-bold">MS</div>
                    <div>
                        <div className="text-[10px] text-white/50 font-bold uppercase leading-none">Keeper</div>
                        <div className="text-xs font-bold leading-none">M. Siraj</div>
                    </div>
                </div>

                {/* Wagon Wheel mock */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-accent/20 flex items-center justify-center">
                    <div className="absolute w-full h-[1px] bg-accent/30 rotate-45" />
                    <div className="absolute w-full h-[1px] bg-accent/30 -rotate-45" />
                    <div className="absolute w-full h-[1px] bg-accent/30 rotate-90" />
                    <div className="absolute w-full h-[1px] bg-accent/30" />
                    <div className="w-32 h-32 rounded-full border-2 border-accent neon-glow animate-pulse" />
                    <div className="absolute top-0 text-[10px] font-bold text-accent">WAGON WHEEL</div>
                </div>

                {/* Stats Sidebar */}
                <div className="absolute top-12 right-12 w-48 flex flex-col gap-4">
                    <div className="p-4 glass rounded-xl">
                        <div className="text-[10px] text-white/40 font-bold uppercase mb-1">Ball Speed</div>
                        <div className="text-2xl font-mono font-bold text-accent">144.2 <span className="text-xs font-normal">KMPH</span></div>
                    </div>
                    <div className="p-4 glass rounded-xl">
                        <div className="text-[10px] text-white/40 font-bold uppercase mb-1">Spin Rate</div>
                        <div className="text-2xl font-mono font-bold text-neon-pink">1240 <span className="text-xs font-normal">RPM</span></div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
