import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, User, Crosshair, HelpCircle } from "lucide-react";

const players = [
  { id: 1, name: "S. Dhawan", role: "Opener", x: 45, y: 35, stats: "Runs: 42 (28)" },
  { id: 2, name: "R. Sharma", role: "Slip", x: 65, y: 25, stats: "Catches: 12" },
  { id: 3, name: "J. Bumrah", role: "Bowler", x: 50, y: 70, stats: "Speed: 148 km/h" },
  { id: 4, name: "R. Jadeja", role: "Point", x: 20, y: 45, stats: "Runs Saved: 14" },
];

export default function InteractiveConsole() {
  const [activePlayer, setActivePlayer] = useState<number | null>(null);
  const [layer, setLayer] = useState<"player" | "wagon">("player");

  return (
    <section id="live" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">EXPERIENCE THE <br /><span className="text-accent italic">OVERLAY</span></h2>
            <p className="text-white/60 mb-8 max-w-md">
              Toggle between different data layers to see how CricAR transforms your view. 
              Hover over the pins to inspect real-time player telemetry.
            </p>
            
            <div className="flex gap-4 p-1 glass rounded-2xl w-fit mb-12">
              <button 
                onClick={() => setLayer("player")}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${layer === "player" ? "bg-accent text-black" : "text-white/40 hover:text-white"}`}
              >
                Tracking
              </button>
              <button 
                onClick={() => setLayer("wagon")}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${layer === "wagon" ? "bg-accent text-black" : "text-white/40 hover:text-white"}`}
              >
                Analytics
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase text-xs tracking-widest">Dynamic Identifiers</h4>
                  <p className="text-white/40 text-sm">Real-time name tags that follow players with sub-pixel precision even during rapid movement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Crosshair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase text-xs tracking-widest">Heatmap Integration</h4>
                  <p className="text-white/40 text-sm">Visualize zone dominance and placement probability based on the last 50 matches.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[1.5] w-full">
            <div className="relative aspect-video glass rounded-[40px] overflow-hidden border-white/10 group shadow-2xl shadow-accent/5">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-cricket-player-batting-at-the-stadium-round-shot-4592-large.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* Player Layer */}
              {layer === "player" && players.map((player) => (
                <div 
                  key={player.id}
                  className="absolute"
                  style={{ left: `${player.x}%`, top: `${player.y}%` }}
                  onMouseEnter={() => setActivePlayer(player.id)}
                  onMouseLeave={() => setActivePlayer(null)}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent neon-glow animate-pulse" />
                    
                    <AnimatePresence>
                      {activePlayer === player.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 10, x: "-50%" }}
                          className="absolute bottom-8 left-1/2 p-3 glass min-w-[140px] rounded-xl z-20"
                        >
                          <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">{player.role}</div>
                          <div className="font-bold text-sm mb-1">{player.name}</div>
                          <div className="text-[10px] text-white/50">{player.stats}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}

              {/* Wagon Wheel Layer (Simplistic mock) */}
              {layer === "wagon" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-80 h-80 rounded-full border border-accent/30 relative"
                  >
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <div 
                            key={deg}
                            className="absolute top-1/2 left-1/2 h-[1px] bg-accent/20 origin-left"
                            style={{ width: '40%', transform: `rotate(${deg}deg)` }}
                        />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-2 border-accent neon-glow flex items-center justify-center">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Innings Map</span>
                        </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* UI Overlay Corners */}
              <div className="absolute top-6 left-6 text-[10px] font-bold tracking-widest uppercase text-white/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Live Stream Latency: 12ms
              </div>
              <div className="absolute bottom-6 right-6 text-[10px] font-mono font-bold text-accent">
                SCANNING FIELD // AI_ENABLED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
