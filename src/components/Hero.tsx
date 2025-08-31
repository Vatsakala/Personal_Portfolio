import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
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
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Hi, I'm <span className="hero-accent">Vatsa Arvind Kala</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 hero-text font-light text-white/90">
            <span className="inline-flex items-center gap-2">MIS Student</span>
            <span className="mx-4 text-white/50">|</span>
            <span className="hero-accent">Data + AI Enthusiast</span>
            <span className="mx-4 text-white/50">|</span>
            <span className="hero-text">Full Stack Explorer</span>
          </div>
          
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging data science and technology to solve real-world problems. 
            Currently pursuing MIS while building innovative solutions in AI and web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0 w-64 max-w-[30%]">
              <Download className="mr-2 h-5 w-5 text-white transition-transform group-hover:scale-110 " />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-gray-300 dark:border-gray-600 bg-white/20 dark:bg-gray-800/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/30 dark:hover:bg-gray-700/30 hover:border-gray-400 dark:hover:border-gray-500 backdrop-blur-sm hover:text-white w-64 max-w-[30%]"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5 text-white transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Vertical Social Links */}
        <div className="hidden md:flex flex-col gap-4 items-center fixed right-8 top-1/2 -translate-y-1/2 z-30">
          <a href="https://linkedin.com/in/vatsa-kala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="LinkedIn">
            <Linkedin className="w-6 h-6 text-white/80 hover:text-blue-400" />
          </a>
          <a href="https://github.com/vatsakala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="GitHub">
            <Github className="w-6 h-6 text-white/80 hover:text-white" />
          </a>
          <a href="mailto:vatsakala.contact@gmail.com" className="hover:scale-110 transition-transform" title="Gmail">
            <Mail className="w-6 h-6 text-white/80 hover:text-red-400" />
          </a>
        </div>
      </div>

      {/* Animated Mouse Scroll Button */}
      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 flex flex-col items-center group focus:outline-none hover:scale-110 transition-transform duration-200"
        onClick={scrollToNextSection}
        aria-label="Scroll Down"
      >
        <span className="flex items-center justify-center w-8 h-14">
          <span className="relative flex flex-col items-center justify-start w-5 h-9 border-2 border-white/50 rounded-full bg-transparent animate-bounce-slow">
            <span className="w-0.5 h-2 bg-white/50 rounded-full mt-1 animate-pulse" />
          </span>
        </span>
      </button>
    </section>
  );
};

export default Hero;
