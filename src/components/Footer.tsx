import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-foreground font-semibold mb-2">Vatsa Arvind Kala</div>
            <div className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
              © 2025 Built with 
              <Heart className="h-4 w-4 text-red-400" />
              using React & TypeScript
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Resume
            </a>
            <span className="text-muted-foreground">•</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2 h-auto"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;