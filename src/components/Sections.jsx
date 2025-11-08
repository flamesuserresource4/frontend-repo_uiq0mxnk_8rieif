import { motion, useScroll, useTransform } from 'framer-motion';

function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-white/15 bg-white/10 dark:bg-neutral-900/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,0.35)] ${className}`}>
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative p-6">{children}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-semibold text-white mb-8"
        >
          About
        </motion.h3>
        <GlassCard>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/80 space-y-3"
          >
            <p>Based in Toronto, Canada.</p>
            <p>
              Honours Bachelor of Computer Science (Data Analytics), Sheridan College (2022–2025) — GPA 3.7 (Honours).
            </p>
            <p>Passionate about AI, analytics, and intelligent automation.</p>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skills = {
    Programming: ['Python', 'C++', 'JavaScript', 'SQL', 'R'],
    'Web Dev': ['React', 'Node.js', 'FastAPI', 'Tailwind'],
    'Big Data': ['MongoDB', 'PostgreSQL', 'Pandas', 'Spark (concepts)'],
    'AI/ML': ['Scikit-learn', 'PyTorch (basics)', 'NLP', 'Computer Vision'],
    'Cloud & Visualization': ['AWS (S3, EC2)', 'GCP (basics)', 'Tableau', 'Power BI'],
  };

  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-8"
        >
          Skills
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <GlassCard key={group}>
              <h4 className="text-white font-semibold mb-3">{group}</h4>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/80"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceProjectsSection() {
  const experiences = [
    { role: 'AI Researcher', org: 'Sheridan', time: '2024', desc: 'Applied ML research and data experimentation.' },
    { role: 'AI Developer', org: 'Naryant', time: '2023', desc: 'Built intelligent automation workflows.' },
    { role: 'IIoT Developer', org: 'Magna', time: '2022', desc: 'Developed industrial IoT integrations.' },
  ];

  const projects = [
    'ContextIQ',
    'Climate Prediction',
    'FairLens',
    'SnapCal',
    'Inventory System',
  ];

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-8"
        >
          Experience
        </motion.h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] mt-3" />
                  {i !== experiences.length - 1 && (
                    <div className="ml-[3px] h-full w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
                  )}
                </div>
                <GlassCard className="flex-1">
                  <h4 className="text-white font-semibold">
                    {exp.role} <span className="text-white/60">— {exp.org}</span>
                  </h4>
                  <p className="text-white/50 text-sm mb-2">{exp.time}</p>
                  <p className="text-white/80">{exp.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div id="projects" className="grid sm:grid-cols-2 gap-6">
            {projects.map((name, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <GlassCard>
                  <div className="h-28 mb-4 rounded-xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-500/20" />
                  <h5 className="text-white font-semibold">{name}</h5>
                  <p className="text-white/70 text-sm mt-1">Interactive project with parallax and depth motion.</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AchievementsContactSection() {
  const achievements = [
    'IEEE Publication A',
    'IEEE Publication B',
    'Certification: AWS Cloud Practitioner',
  ];

  return (
    <section id="achievements" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-8"
        >
          Certifications & Publications
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach) => (
            <motion.div key={ach} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }}>
              <GlassCard>
                <p className="text-white/80">{ach}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <footer id="contact" className="mt-20">
          <GlassCard>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/80">
              <div>
                <p className="text-white/60 text-xs">Location</p>
                <p>Toronto, ON</p>
              </div>
              <div>
                <p className="text-white/60 text-xs">Email</p>
                <a href="mailto:hetkumar.patel1403@gmail.com" className="hover:text-white">hetkumar.patel1403@gmail.com</a>
              </div>
              <div>
                <p className="text-white/60 text-xs">LinkedIn</p>
                <a href="https://linkedin.com/in/h3t08" target="_blank" rel="noreferrer" className="hover:text-white">linkedin.com/in/h3t08</a>
              </div>
              <div>
                <p className="text-white/60 text-xs">GitHub</p>
                <a href="https://github.com/het0814" target="_blank" rel="noreferrer" className="hover:text-white">github.com/het0814</a>
              </div>
            </div>
          </GlassCard>
          <p className="text-center text-white/40 text-xs mt-6">© {new Date().getFullYear()} Hetkumar Patel</p>
        </footer>
      </div>
    </section>
  );
}
