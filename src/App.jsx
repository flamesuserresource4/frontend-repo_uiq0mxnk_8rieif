import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, SkillsSection, ExperienceProjectsSection, AchievementsContactSection } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(59,130,246,0.15),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceProjectsSection />
        <AchievementsContactSection />
      </main>
    </div>
  );
}

export default App;
