import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      
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
            <Button className="btn-hero group">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-ghost group"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-background/20">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;