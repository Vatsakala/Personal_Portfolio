// components/Skills.tsx
import { Database, Code, BarChart3, Cloud, ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLayoutEffect, useRef, useState } from 'react';

type Category = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  skills: string[];
};

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
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

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
      </div>
    </section>
  );
};

export default Skills;
