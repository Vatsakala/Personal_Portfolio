import * as React from 'react';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Activity,
  Users,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type Project = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tech: string[];
  featured: boolean;
  gradient: string;
  image?: string;
  imageAlt?: string;
  codeUrl?: string;
  paperUrl?: string;
};

const Projects = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const projects: Project[] = [
    {
      title: 'RegDoc: AI-Powered Regulatory Document Classifier',
      description:
        'Streamlit-based system that classifies PDFs/images into Public, Confidential, Highly Sensitive, or Unsafe using OCR heuristics + dual-LLM validation, HITL overrides, and citation-backed reasoning.',
      icon: Gamepad2,
      tech: ['Streamlit', 'Databricks', 'OCR', 'Python', 'pdfplumber', 'pytesseract', 'LLaMA 3.1'],
      featured: true,
      gradient: 'from-orange-500 to-red-600',
      image: '/proj/Regdoc.png',
      imageAlt: 'RegDoc',
      codeUrl: 'https://github.com/Vatsakala/Regdoc-classifier',
    },
    {
      title: 'Mai Shan Yun Analytics Dashboard',
      description:
        'Restaurant BI platform with real-time KPIs, demand forecasting, proactive reorder alerts, and Claude-generated insights for data-driven inventory decisions.',
      icon: ShoppingCart,
      tech: ['Streamlit', 'NumPy', 'Requests', 'SQL', 'Streamlit', 'Pandas', 'Business Intelligence'],
      featured: true,
      gradient: 'from-primary to-blue-600',
      image: '/proj/Maishunyun.png',
      imageAlt: 'Maishunyun analytics',
      codeUrl: 'https://github.com/Vatsakala/Mai_Shun_Yun_Dashboard',
    },
    {
      title: 'Dorsal Vein Biometric Authentication',
      description:
        'Developed an explainable AI system for biometric authentication using 11,000+ dorsal palm vein images. Achieved 95.3% validation accuracy and published results in Springer.',
      icon: ShoppingCart,
      tech: ['PyTorch', 'Pandas', 'OpenCV', 'Scikit-learn', 'Keras'],
      featured: true,
      gradient: 'from-primary to-blue-600',
      image: '/proj/Dorsal.png',
      imageAlt: 'Dorsal veins',
      codeUrl: 'https://github.com/Vatsakala/Localization-of-Palm-Veins',
      paperUrl: 'https://link.springer.com/chapter/10.1007/978-981-97-6352-8_32',
    },
    {
      title: 'Terrainfier: Terrain Recognition model',
      description:
        'Developed a transfer learning–based terrain recognition model using the Jackal UGV Dataset with 7 terrain classes. Achieved 97.7% accuracy with DenseNet-121.',
      icon: Activity,
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      featured: true,
      gradient: 'from-accent to-purple-600',
      image: '/proj/Terrainfier.jpg',
      imageAlt: 'Health analytics UI',
      paperUrl: 'https://link.springer.com/chapter/10.1007/978-981-97-6794-6_52',
    },
    {
      title: 'AI-Powered 5G Resource Allocation',
      description:
        'Designed an AI-based resource allocation algorithm for 5G networks. Achieved a 15% reduction in resource requirements without degrading transmission quality.',
      icon: Gamepad2,
      tech: ['Python', 'Machine Learning', 'Network Simulation', 'Optimization Algorithms'],
      featured: true,
      gradient: 'from-orange-500 to-red-600',
      image: '/proj/5G.png',
      imageAlt: 'Game analytics charts',
      codeUrl: 'https://github.com/youruser/game-analytics',
      paperUrl: 'https://ieeexplore.ieee.org/document/10593937',
    },
    {
      title: 'Neighborhood Intelligence MCP Server',
      description:
        'Model Context Protocol server that fuses 10+ APIs (maps, crime, housing, air quality) and Claude-powered synthesis to deliver side-by-side neighborhood analyses.',
      icon: ShoppingCart,
      tech: ['Python', 'MCP','OpenRouter', 'Google Maps API', 'REST APIs', 'OpenAI MCP SDK'],
      featured: true,
      gradient: 'from-primary to-blue-600',
      image: '/proj/MCP.png',
      imageAlt: 'MCP',
      codeUrl: 'https://github.com/Vatsakala/Custom_MCP_Neighbourhood',
    },
    {
      title: 'Case Closed Agent',
      description:
        'Production-ready Flask server scaffolding for head-to-head game agents with Judge Engine compatibility, local tester, and Dockerization for CPU-only deployments.',
      icon: ShoppingCart,
      tech: ['Microservice Architecture', 'REST API', 'Python', 'Docker', 'Algorithmic Backend'],
      featured: true,
      gradient: 'from-primary to-blue-600',
      image: '/proj/Caseclosed.png',
      imageAlt: 'MCP',
      codeUrl: 'https://github.com/Vatsakala/CaseClosed',
    },
    {
      title: 'Emotion Detection Model',
      description:
        'Built a CNN-based facial emotion recognition system using the FER-2013 with 30,000+ images. Applied augmentation techniques, achieved ~99% accuracy for multiple emotions.',
      icon: Users,
      tech: ['Python', 'OpenCV', 'Tensforflow', 'Seaborn', 'Keras'],
      featured: false,
      gradient: 'from-green-500 to-teal-600',
      image: '/proj/Emotion.png',
      imageAlt: 'Community feed preview',
      codeUrl: 'https://github.com/Vatsakala/Emotion-detection-Model',
    },
    
  ];

  const ordered = [...projects.filter(p => p.featured), ...projects.filter(p => !p.featured)];
  const appear = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
  const together =
    'transition-opacity transition-transform duration-700 delay-200 will-change-transform';

  return (
    <section
      id="projects"
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 ${together} ${appear}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-14 ${together} ${appear}`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend data science with practical applications
          </p>
        </div>

        <ProjectsCarousel items={ordered} />
      </div>
    </section>
  );
};

export default Projects;

/* ===================== */
/* Tech Chip */
/* ===================== */

const TechChip: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium',
        'bg-slate-100/90 border border-slate-200 text-slate-700 shadow-sm',
        'hover:bg-slate-200/80 hover:text-slate-800',
        'dark:bg-white/[0.06] dark:border-white/10 dark:text-foreground/85 dark:hover:bg-white/[0.1]',
        'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 dark:focus-visible:ring-primary/40',
      ].join(' ')}
    >
      {label}
    </span>
  );
};

/* ===================== */
/* Carousel */
/* ===================== */

const ProjectsCarousel: React.FC<{ items: Project[] }> = ({ items }) => {
  const [index, setIndex] = React.useState(0);
  const count = items.length;

  // measurements for centering math
  const [cardW, setCardW] = React.useState(620);
  const [gap, setGap] = React.useState(20);

  const clamp = (i: number) => (i < 0 ? count - 1 : i >= count ? 0 : i);
  const go = (d: number) => setIndex(prev => clamp(prev + d));
  const goTo = (i: number) => setIndex(clamp(i));

  // desktop unchanged; phones: one full card, discrete swipe
  React.useLayoutEffect(() => {
    const mqSm = window.matchMedia('(min-width: 640px)');
    const mqMd = window.matchMedia('(min-width: 768px)');

    const measure = () => {
      if (mqMd.matches) {
        setCardW(620);
        setGap(20);
        return;
      }
      if (mqSm.matches) {
        setCardW(560);
        setGap(16);
        return;
      }
      // phones
      setCardW(Math.round(window.innerWidth * 0.92));
      setGap(12);
    };

    measure();
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    mqSm.addEventListener?.('change', measure);
    mqMd.addEventListener?.('change', measure);
    return () => {
      window.removeEventListener('resize', onResize);
      mqSm.removeEventListener?.('change', measure);
      mqMd.removeEventListener?.('change', measure);
    };
  }, []);

  // keyboard nav
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  /* ----- discrete swipe (no free-drag) ----- */
  const touch = React.useRef<{ x: number; t: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, t: performance.now() };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dt = performance.now() - touch.current.t;
    const movedEnough = Math.abs(dx) > 80 || (dt < 300 && Math.abs(dx) > 40);
    if (movedEnough) go(dx > 0 ? -1 : 1);
    touch.current = null;
  };

  // center active card
  const translate = `translateX(calc(50% - ${(cardW + gap) * index + cardW / 2}px))`;

  return (
    <div className="relative">
      {/* SIDE ARROWS — closer (-6 instead of -10) */}
      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 
                   items-center justify-center rounded-full bg-white/10 hover:bg-white/20 
                   border border-white/10 shadow backdrop-blur-md"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 
                   items-center justify-center rounded-full bg-white/10 hover:bg-white/20 
                   border border-white/10 shadow backdrop-blur-md"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* track container */}
      <div
        className="overflow-hidden sm:overflow-visible touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex items-stretch will-change-transform transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)]"
          style={{ transform: translate, gap: `${gap}px` }}
        >
          {items.map((p, i) => {
            const isActive = i === index;
            const abs = Math.abs(i - index);
            const isPhone = typeof window !== 'undefined' && window.innerWidth < 640;

            const scale = isPhone
              ? isActive
                ? 'scale-100'
                : 'scale-[.98]'
              : isActive
              ? 'scale-100'
              : abs === 1
              ? 'scale-[.95]'
              : 'scale-[.9]';

            const opacity = isActive ? 'opacity-100' : isPhone ? 'opacity-80' : abs === 1 ? 'opacity-65' : 'opacity-35';
            const blur = isPhone ? 'blur-0' : isActive ? 'blur-0' : abs === 1 ? 'blur-[1px]' : 'blur-[2px]';
            const fadeOverlay = !isActive && !isPhone ? (abs === 1 ? 'bg-black/20' : 'bg-black/35') : '';

            return (
              <article
                key={i}
                onClick={() => goTo(i)}
                role="button"
                aria-label={p.title}
                tabIndex={0}
                className={[
                  'carousel-card',
                  'w-[92vw] sm:w-[560px] md:w-[620px] shrink-0',
                  'transition-all duration-500',
                  scale,
                  opacity,
                  blur,
                  'rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm',
                  'shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-20px_rgba(0,0,0,0.45)]',
                  'relative overflow-hidden',
                  'p-0',
                ].join(' ')}
              >
                {p.image ? (
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.imageAlt || p.title}
                      className="h-56 sm:h-64 w-full object-contain sm:object-cover select-none bg-black/20"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    {fadeOverlay && <div className={`pointer-events-none absolute inset-0 ${fadeOverlay}`} />}
                  </div>
                ) : (
                  <div className={`h-56 sm:h-64 w-full bg-gradient-to-br ${p.gradient}`} />
                )}

                <div className="p-5 sm:p-6">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, j) => (
                      <TechChip key={j} label={t} />
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    {p.codeUrl && (
                      <Button asChild variant="outline" size="sm" className="h-8 px-3 group/btn">
                        <a href={p.codeUrl} target="_blank" rel="noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    )}

                    {p.paperUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="h-8 px-3 bg-gradient-to-r from-primary to-accent hover:scale-[1.03] transition-transform group/btn"
                      >
                        <a href={p.paperUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          Paper URL
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* dots */}
      <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
        {items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                'h-2 w-2 rounded-full transition-all',
                active ? 'w-6 bg-primary' : 'bg-white/30 hover:bg-white/50',
              ].join(' ')}
            />
          );
        })}
      </div>

      {/* bottom mobile arrows — gap-2 (closer) */}
      <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
        <button
          aria-label="Prev"
          onClick={() => go(-1)}
          className="h-9 w-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 flex items-center justify-center"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="h-9 w-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 flex items-center justify-center"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
