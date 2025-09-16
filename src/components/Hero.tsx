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
      className="scroll-mt-28 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in visible">
          {/* Hero Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-black-600 dark:text-white">
            Hi, I'm <span className="hero-accent">Vatsa Arvind Kala</span>
          </h1>
          
          {/* Hero Subtext */}
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light text-gray-600 dark:text-gray-300">
            <span className="inline-flex items-center gap-2">Data Engineering</span>
            <span className="mx-4 text-gray-400 dark:text-gray-500">|</span>
            <span className="hero-accent">Machine Learning & AI</span>
            <span className="mx-4 text-gray-400 dark:text-gray-500">|</span>
            <span>Product Strategy</span>
          </div>
          
          {/* Hero Description */}
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            Curious about how data shapes the world, I build systems and models that turn information into action and ideas into reality.
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white dark:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0 w-64 max-w-[30%]">
              <Download className="mr-2 h-5 w-5 text-white dark:text-white transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-gray-400 dark:border-gray-600 bg-white/20 dark:bg-black/20 text-black dark:text-white hover:text-black-600 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/30 dark:hover:bg-black/30 hover:border-gray-400 dark:hover:border-gray-500 backdrop-blur-sm w-64 max-w-[30%]"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5 text-black dark:text-white transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Vertical Social Links */}
        <div className="hidden md:flex flex-col gap-4 items-center fixed right-8 top-1/2 -translate-y-1/2 z-30">
          <a href="https://linkedin.com/in/vatsa-kala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-400" />
          </a>
          <a href="https://github.com/vatsakala" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="GitHub">
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-black" />
          </a>
          <a href="mailto:vatsakala.contact@gmail.com" className="hover:scale-110 transition-transform" title="Gmail">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-red-400" />
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
          <span className="relative flex flex-col items-center justify-start w-5 h-9 border-2 border-gray-700 dark:border-white rounded-full bg-transparent animate-bounce-slow">
            <span className="w-0.5 h-2 rounded-full mt-1 animate-pulse bg-gray-700 dark:bg-white" />
          </span>
        </span>
      </button>
    </section>
  );
};

export default Hero;
