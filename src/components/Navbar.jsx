import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]"
      aria-label="Primary"
    >
      <div className="backdrop-blur-xl bg-white/10 dark:bg-neutral-900/40 border border-white/15 rounded-2xl shadow-[0_8px_30px_rgb(2,6,23,0.35)]">
        <div className="px-5 py-3 flex items-center justify-between">
          <a href="#top" className="text-sm font-semibold tracking-wide text-white/90">Hetkumar Patel</a>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-white/60 after:transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-xs md:text-sm px-3 py-2 rounded-xl bg-gradient-to-r from-white/20 to-white/5 text-white/90 border border-white/20 hover:from-white/30 hover:to-white/10 shadow-inner shadow-white/10 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
