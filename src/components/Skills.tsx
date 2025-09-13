// components/Skills.tsx
import { Database, Code, BarChart3, Cloud, ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Category = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  skills: string[];
};

/* --------------------------- Count-up hook --------------------------- */
function useCountUp(target: number, opts?: { duration?: number; start?: boolean }) {
  const duration = opts?.duration ?? 900; // ms
  const start = !!opts?.start;
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;

    // Respect prefers-reduced-motion
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    startedRef.current = true;

    if (reduce || duration <= 0) {
      setValue(target);
      return;
    }

    const t0 = performance.now();
    const tick = (t: number) => {
      const elapsed = t - t0;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return value;
}

/* ------------------------- Collapsible widget ------------------------ */
const Collapsible: React.FC<{
  open: boolean;
  onToggle: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ open, onToggle, header, children }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (open) {
      setHeight(el.scrollHeight);
      const id = setTimeout(() => setHeight(el.scrollHeight), 350);
      return () => clearTimeout(id);
    } else {
      setHeight(0);
    }
  }, [open, children]);

  return (
    <div className="glass-card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">{header}</div>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        style={{ height }}
        className="[transition:height_0.35s_ease] will-change-[height] overflow-hidden"
        aria-hidden={!open}
      >
        <div ref={innerRef} className="px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [hasTriggered, setHasTriggered] = useState(false); // run once
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isIntersecting && !hasTriggered) setHasTriggered(true);
  }, [isIntersecting, hasTriggered]);

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const skillCategories: Category[] = [
    {
      title: 'Languages',
      icon: Code,
      color: 'text-primary',
      skills: ['Python', 'SQL', 'C++', 'R', 'CSS', 'JavaScript', 'TypeScript', 'Embedded C', 'MATLAB'],
    },
    {
      title: 'Tools & Frameworks',
      icon: BarChart3,
      color: 'text-accent',
      skills: ['Flask', 'React', 'Node.js', 'Django', 'Power BI', 'Tableau', 'JIRA', 'Postman', 'Vitest'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-primary',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Snowflake', 'Redis', 'AWS RDS', 'Cassandra', 'SQLite'],
    },
    {
      title: 'Cloud & Other',
      icon: Cloud,
      color: 'text-accent',
      skills: ['AWS (Lambda, EC2, S3)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'ELK Stack', 'Machine Learning', 'Git', 'DSA'],
    },
  ];

  const core = [
    { skill: 'Data Engineering & Machine Learning', level: 90 },
    { skill: 'Cloud & DevOps', level: 87 },
    { skill: 'Fullstack & Software Development', level: 84 },
  ];

  return (
    <section
      id="skills"
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 transition-opacity transition-transform duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-opacity transition-transform duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 hero-accent">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science and full-stack development
          </p>
        </div>

        {/* Collapsible Cards — unified entrance */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8
            transition-opacity transition-transform duration-700 transform-gpu will-change-[opacity,transform]
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const open = openSet.has(index);

            return (
              <div key={index} className="transform-gpu">
                <Collapsible
                  open={open}
                  onToggle={() => toggle(index)}
                  header={
                    <>
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-card rounded-2xl">
                        <Icon className={`h-7 w-7 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    </>
                  }
                >
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={`skill-badge text-center transition-transform duration-200 ${
                          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </Collapsible>
              </div>
            );
          })}
        </div>

        {/* === Core Competencies with original styling & count-up === */}
        <div
          className={`mt-16 glass-card p-8 transition-opacity transition-transform duration-700 transform-gpu will-change-[opacity,transform]
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {core.map((item, index) => {
              const count = useCountUp(item.level, { duration: 1000, start: hasTriggered });
              return (
                <div
                  key={index}
                  className={`text-center transition-opacity transition-transform duration-500 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-lg font-medium mb-3 text-foreground">{item.skill}</div>
                  <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full [transition:width_1s_ease-out]"
                      style={{ width: hasTriggered ? `${item.level}%` : '0%' }}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{count}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
