// pages/index.tsx
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Continuous Gradient & Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"></div>

        {/* Animated Gradient Glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-purple-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 via-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-400/25 via-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-500"></div>

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
