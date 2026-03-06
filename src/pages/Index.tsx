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
import { usePageMeta } from '@/hooks/use-page-meta';

const Index = () => {
  usePageMeta({
    title: 'Vatsa Arvind Kala - Portfolio',
    description:
      'Data Engineering | Machine Learning & AI | Product Strategy - Portfolio showcasing projects in machine learning, data science, and web development.',
    noIndex: false,
    type: 'website',
    image: '/Favicon.png',
  });

  return (
    <div className="relative min-h-screen">
      {/* Continuous Gradient & Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 dark:from-black dark:via-slate-950 dark:to-slate-900" />

        {/* Developer grid texture */}
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.2] [background-image:linear-gradient(to_right,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]" />

        {/* Major glowing orbs */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[980px] h-[760px] bg-gradient-to-t from-blue-500/38 via-sky-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[12%] -left-24 w-[520px] h-[520px] bg-gradient-to-br from-cyan-400/30 via-blue-500/22 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-[10%] -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/30 via-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-[16%] left-[18%] w-[420px] h-[420px] bg-gradient-to-tr from-sky-500/28 via-cyan-400/18 to-transparent rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute bottom-[22%] right-[14%] w-[460px] h-[460px] bg-gradient-to-tl from-blue-600/30 via-sky-400/18 to-transparent rounded-full blur-2xl animate-pulse delay-300" />

        {/* Supporting orbs */}
        <div className="absolute top-24 left-12 w-28 h-28 bg-primary/28 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-accent/24 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute bottom-44 right-24 w-36 h-36 bg-primary/24 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-24 w-20 h-20 bg-accent/26 rounded-full blur-lg animate-pulse delay-300" />
        <div className="absolute top-[52%] left-[9%] w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-650" />
        <div className="absolute top-[58%] right-[9%] w-14 h-14 bg-accent/30 rounded-full blur-lg animate-pulse delay-450" />

        {/* Readability veil */}
        <div className="absolute inset-0 bg-white/18 dark:bg-black/22 backdrop-blur-[1px]" />
      </div>

      {/* Page Content */}
      <main className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
