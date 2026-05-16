import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, User, Crosshair, HelpCircle, Radio, Sparkles } from "lucide-react";

const players = [
  { id: 1, name: "S. Dhawan", role: "Opener", x: 45, y: 35, stats: "Runs: 42 (28)" },
  { id: 2, name: "R. Sharma", role: "Slip", x: 65, y: 25, stats: "Catches: 12" },
  { id: 3, name: "J. Bumrah", role: "Bowler", x: 50, y: 70, stats: "Speed: 148 km/h" },
  { id: 4, name: "R. Jadeja", role: "Point", x: 20, y: 45, stats: "Runs Saved: 14" },
];

export default function InteractiveConsole({ isDark }: { isDark: boolean }) {
  const [activePlayer, setActivePlayer] = useState<number | null>(null);
  const [layer, setLayer] = useState<"player" | "wagon">("player");

  return (
    <section id="live" className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-m3-primary/10 text-m3-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" /> Interactive SDK
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight font-serif leading-[1.1]">
              INTELLIGENCE<br />
              <span className="text-m3-primary italic">AUGMENTED</span>
            </h2>
            <p className="text-[var(--fg)] opacity-70 mb-10 max-w-md leading-relaxed text-lg">
              CricAR transforms the stadium into a live data canvas. Precision tracking meets professional-grade sports intelligence.
            </p>
            
            <div className="flex gap-2 p-1.5 bg-[var(--card)] border border-[var(--border)] rounded-full w-fit mb-12 shadow-sm">
              <button 
                onClick={() => setLayer("player")}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${layer === "player" ? "bg-m3-primary text-white shadow-md" : "text-[var(--fg)] opacity-50 hover:opacity-100"}`}
              >
                Tracking
              </button>
              <button 
                onClick={() => setLayer("wagon")}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${layer === "wagon" ? "bg-m3-primary text-white shadow-md" : "text-[var(--fg)] opacity-50 hover:opacity-100"}`}
              >
                Analytics
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 m3-card bg-m3-primary/5 border-none">
                <User className="w-6 h-6 text-m3-primary mb-4" />
                <h4 className="font-bold mb-2 uppercase text-[10px] tracking-widest">Tracking</h4>
                <p className="text-[var(--fg)] opacity-60 text-xs leading-relaxed">Dynamic IDs that track with sub-millisecond precision.</p>
              </div>
              <div className="p-6 m3-card bg-m3-surface-variant/30 border-none">
                <Crosshair className="w-6 h-6 text-m3-on-surface-variant mb-4" />
                <h4 className="font-bold mb-2 uppercase text-[10px] tracking-widest">Heatmaps</h4>
                <p className="text-[var(--fg)] opacity-60 text-xs leading-relaxed">Zone dominance visualized through historical fusion.</p>
              </div>
            </div>
          </div>

          <div className="flex-[1.5] w-full">
            <div className="relative aspect-video rounded-[48px] overflow-hidden border border-[var(--border)] shadow-2xl group transition-all duration-700 bg-black">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className={`w-full h-full object-cover transition-all duration-1000 ${isDark ? 'opacity-80 grayscale-[0.2]' : 'opacity-100'}`}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-cricket-player-batting-at-the-stadium-round-shot-4592-large.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

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
                    <div className="w-10 h-10 rounded-full bg-m3-primary/20 border border-m3-primary flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_rgba(0,100,146,0.5)] transition-transform hover:scale-110">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <AnimatePresence>
                      {activePlayer === player.id && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                          className="absolute bottom-12 left-1/2 p-4 glass min-w-[180px] rounded-[24px] z-20 border-m3-primary/30"
                        >
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                             <span className="text-[10px] font-bold tracking-widest text-m3-primary uppercase">Precision Auth</span>
                          </div>
                          <div className="font-bold text-base mb-0.5 text-white">{player.name}</div>
                          <div className="text-[10px] text-white/60 mb-3">{player.role}</div>
                          <div className="pt-2 border-t border-white/10 text-[11px] font-medium text-m3-primary">
                            {player.stats}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}

              {layer === "wagon" && (
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Heatmap Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg className="w-full h-full opacity-40">
                      <defs>
                        <radialGradient id="heat1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ff0000" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="heat2" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ffa500" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ffa500" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="heat3" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ffff00" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="55%" cy="40%" r="120" fill="url(#heat1)" className="animate-pulse" />
                      <circle cx="45%" cy="35%" r="100" fill="url(#heat2)" style={{ animationDelay: "1s" }} className="animate-pulse" />
                      <circle cx="60%" cy="45%" r="80" fill="url(#heat3)" style={{ animationDelay: "2s" }} className="animate-pulse" />
                      <circle cx="40%" cy="50%" r="140" fill="url(#heat2)" style={{ animationDelay: "0.5s" }} className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-start relative z-10">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="w-56 space-y-4"
                    >
                      <div className="p-5 glass rounded-[28px] border-m3-primary/20 shadow-xl">
                        <div className="text-[10px] text-white/40 font-bold uppercase mb-2 tracking-widest">Entry Angle</div>
                        <div className="text-2xl font-bold text-m3-primary">14.2° <span className="text-sm font-normal text-white/30">RAD</span></div>
                        <div className="h-1.5 w-full bg-white/5 mt-3 rounded-full overflow-hidden">
                           <div className="h-full bg-m3-primary w-1/3" />
                        </div>
                      </div>
                      <div className="p-5 glass rounded-[28px] border-neon-pink/20 shadow-xl">
                        <div className="text-[10px] text-white/40 font-bold uppercase mb-2 tracking-widest">Velocity Path</div>
                        <div className="text-2xl font-bold text-neon-pink">112.4 <span className="text-xs">MPH</span></div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="p-5 glass rounded-[28px] flex flex-col items-end border-white/10 shadow-xl"
                    >
                       <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3">Live Prediction</div>
                       <div className="grid grid-cols-3 grid-rows-3 gap-1.5 w-24 h-28 border border-white/10 p-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className={`rounded-sm bg-white/5 ${i === 4 ? 'bg-m3-primary/40' : i === 1 ? 'bg-neon-pink/20' : ''}`} />
                          ))}
                       </div>
                    </motion.div>
                  </div>

                  <div className="flex justify-center items-end flex-1 pb-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative w-72 h-72"
                    >
                      <div className="absolute inset-0 rounded-full border border-white/10" />
                      {[
                        { deg: 30, color: '#006492', len: '80%' },
                        { deg: 45, color: '#006492', len: '90%' },
                        { deg: 120, color: '#006492', len: '40%' },
                        { deg: 210, color: '#ff007f', len: '65%' },
                        { deg: 300, color: '#006492', len: '95%' },
                      ].map((line, i) => (
                        <div 
                          key={i}
                          className="absolute top-1/2 left-1/2 h-[3px] origin-left rounded-full"
                          style={{ 
                            width: line.len, 
                            transform: `rotate(${line.deg}deg)`,
                            backgroundColor: line.color,
                            opacity: 0.8
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full glass border border-white/5 flex flex-col items-center justify-center shadow-2xl">
                          <div className="text-2xl font-bold tracking-tighter text-white">B54</div>
                          <div className="text-[8px] font-bold text-m3-primary tracking-[0.3em] uppercase">Sector Lock</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              <div className="absolute top-8 left-8 text-[11px] font-bold tracking-widest uppercase text-white/40 flex items-center gap-2 px-3 py-1.5 glass rounded-xl border-white/5">
                <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                Network Streamed <span className="text-white/10">|</span> 120 FPS
              </div>
              
              <div className="absolute bottom-8 right-8 flex gap-3">
                <div className="px-4 py-2 glass rounded-2xl text-[10px] font-bold text-m3-primary uppercase border-m3-primary/20 shadow-lg">SENSOR_SYNC: OK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
