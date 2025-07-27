import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

<style>
{`
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
`}
</style>

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-purple-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 via-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Tertiary glow */}
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-400/25 via-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-[1px]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="hero-accent">Vatsa Arvind Kala</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 hero-text font-light">
            <span className="inline-flex items-center gap-2">
              <ArrowRight className="h-6 w-6 text-primary" />
              MIS Student
            </span>
            <span className="mx-4 text-muted-foreground">|</span>
            <span className="hero-accent">Data + AI Enthusiast</span>
            <span className="mx-4 text-muted-foreground">|</span>
            <span className="hero-text">Full Stack Explorer</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging data science and technology to solve real-world problems. 
            Currently pursuing MIS while building innovative solutions in AI and web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 backdrop-blur-sm"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Vertical Social Links */}
        <div className="hidden md:flex flex-col gap-4 items-center fixed right-8 top-1/2 -translate-y-1/2 z-30">
          <a href="https://linkedin.com/in/vatsa-kala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-600 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
          <a href="https://github.com/vatsakala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="GitHub">
            <Github className="w-6 h-6 text-gray-600 dark:text-white/80 hover:text-gray-800 dark:hover:text-white" />
          </a>
          <a href="mailto:vatsakala.contact@gmail.com" className="hover:scale-110 transition-transform" title="Gmail">
            <Mail className="w-6 h-6 text-gray-600 dark:text-white/80 hover:text-red-600 dark:hover:text-red-400" />
          </a>
        </div>
      </div>

      {/* Animated Mouse Scroll Button at Bottom Center */}
      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform duration-200"
        onClick={scrollToNextSection}
        aria-label="Scroll Down"
      >
        <span className="flex items-center justify-center w-8 h-14">
          <span className="relative flex flex-col items-center justify-start w-5 h-9 border-2 border-gray-400 dark:border-white/80 rounded-full bg-transparent animate-bounce-slow">
            {/* Mouse wheel */}
            <span className="w-0.5 h-2 bg-gray-500 dark:bg-white/80 rounded-full mt-1 animate-pulse" />
            {/* No arrow, minimal look */}
          </span>
        </span>
      </button>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;