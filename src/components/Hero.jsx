import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] md:h-[100vh] overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient lighting overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 tracking-widest uppercase text-xs mb-4"
          >
            Cinematic Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-semibold text-white leading-tight"
          >
            Hetkumar Patel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-white/80 mt-3"
          >
            AI/ML Developer & Data Analytics Researcher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 mt-5 max-w-2xl"
          >
            “Building intelligent systems with data-driven precision.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-[0_8px_30px_rgba(2,6,23,0.45)] hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(2,6,23,0.6)] transition-all"
            >
              View Resume
              <span className="animate-pulse text-white/70">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
