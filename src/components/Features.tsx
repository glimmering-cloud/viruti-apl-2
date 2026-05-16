import { Eye, Layers, BarChart3, Target } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision Tracking",
    description: "Centimeter-accurate tracking of every player and the ball using multi-angle sensor fusion."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Analytics",
    description: "Launch angles, spin rates, and predicted trajectories rendered instantly in your field of vision."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Augmented Layers",
    description: "Switch between Wagon Wheels, fielding maps, and historical ball patterns with a simple gesture."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Immersive View",
    description: "Low-latency processing ensures the digital overlay stays locked to the real world."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-serif italic">THE AR STACK</h2>
          <p className="text-[var(--fg)] opacity-40 max-w-xl mx-auto uppercase tracking-[0.4em] text-[10px] font-bold">
            Built for professional scouts, players, and the most passionate fans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 m3-card hover:bg-m3-primary/5 transition-all duration-500 group border-none bg-m3-surface-variant/20"
            >
              <div className="w-14 h-14 rounded-[20px] bg-m3-primary/10 flex items-center justify-center text-m3-primary mb-8 group-hover:scale-110 transition-transform shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans tracking-tight">{feature.title}</h3>
              <p className="text-[var(--fg)] opacity-50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
