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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif italic">THE AR STACK</h2>
          <p className="text-white/50 max-w-xl mx-auto uppercase tracking-widest text-sm font-bold">
            Built for professional scouts, players, and the most passionate fans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
