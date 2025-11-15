import { MapPin, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  logoSrc: string;
  logoAlt?: string;
};

const Experience = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const experiences: ExperienceItem[] = [
    {
      company: 'Trading Technologies',
      role: 'Data Engineering Intern',
      location: 'New York, NY',
      duration: 'May 2025 - Dec 2025',
      highlights: [
        'Migrated 4 PetaBytes of trading data from MSSQL to PostgreSQL and Snowflake on AWS, designing 500+ optimized table schemas for performance and integrity.',
        'Built and deployed backend APIs with Flask and SQLAlchemy on AWS, integrating unit tests and ELK logging for reliability.',
        'Enabled real-time analytics to support the rollout of the firm’s next-generation TradeZoom trading platform.',
      ],
      logoSrc: '/logos/TT.svg',
      logoAlt: 'Trading Technologies',
    },
    {
      company: 'Texas A&M University',
      role: 'Research Assistant',
      location: 'College Station, TX',
      duration: 'Jan 2025 - May 2025',
      highlights: [
        'Enhanced biomedical research models (GNNs and LLMs) with advanced optimization, improving performance by 20% and predictive accuracy by 15%.',
        'Redesigned preprocessing and feature engineering workflows, cutting data processing time by 30% and boosting model reliability.',
        'Supported high-impact biomedical applications by integrating scalable ML techniques into research pipelines.',
      ],
      logoSrc: '/logos/TAMU.svg',
      logoAlt: 'Texas A&M',
    },
    {
      company: 'ARK Meditech Systems',
      role: 'Data Intern',
      location: 'Ahmedabad, India',
      duration: 'Dec 2023 - June 2023',
      highlights: [
        'Streamlined data pipelines using Spark SQL and HiveQL on Hadoop, processing 10K+ records daily and improving efficiency by 18%.',
        'Developed SQL-driven Tableau dashboards to track equipment efficiency, patient volumes, and compliance, boosting insights by 30%.',
        'Improved diagnostic workflows by integrating scalable big-data solutions into daily operations.',
      ],
      logoSrc: '/logos/ARK.svg',
      logoAlt: 'ARK',
    },
    {
      company: 'E-infochips',
      role: 'Research Intern',
      location: 'Ahmedabad, India',
      duration: 'May 2023- June 2023',
      highlights: [
        'Researched 10+ smartphone systems, identifying hardware optimizations that improved design efficiency by 15%.',
        'Led a team of 4 engineers to implement predictive research, driving enhancements in semiconductor design.',
        'Delivered actionable insights that supported next-generation hardware development initiatives.',
      ],
      logoSrc: '/logos/E-infochips.svg',
      logoAlt: 'E-infochips',
    },
  ];

  return (
    <section
      id="experience"
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            transitionDelay: '200ms',
            opacity: isIntersecting ? 1 : 0,
            transform: `translateY(${isIntersecting ? 0 : 8}px)`,
          }}
        >
          <h2 className="text-4xl font-bold mb-4 hero-accent">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through hands-on internships and real-world projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block transition-all duration-1000"
            style={{
              transitionDelay: '300ms',
              opacity: isIntersecting ? 1 : 0,
              transform: `scaleY(${isIntersecting ? 1 : 0})`,
              transformOrigin: 'top',
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative transition-all duration-700"
                style={{
                  transitionDelay: `${400 + index * 200}ms`,
                  opacity: isIntersecting ? 1 : 0,
                  transform: `translateX(${isIntersecting ? 0 : 8}px)`,
                }}
              >
                {/* timeline dot */}
                <div
                  className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block transition-all duration-500"
                  style={{
                    transitionDelay: `${500 + index * 200}ms`,
                    opacity: isIntersecting ? 1 : 0,
                    transform: `scale(${isIntersecting ? 1 : 0})`,
                  }}
                />

                {/* card */}
                <div className="md:ml-16">
                  <div className="rounded-2xl p-4 md:p-5 lg:p-6 ring-1 ring-border/40 bg-background/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300">
                    {/* 2-column layout with tighter logo rail */}
                    <div className="grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-6 items-center">
                      {/* logo */}
                      <div className="flex items-center justify-center self-center">
                        <img
                          src={exp.logoSrc}
                          alt={exp.logoAlt || `${exp.company} logo`}
                          className="block object-contain w-auto h-32 md:h-36 mx-auto"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* right side */}
                      <div className="min-w-0 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <h4 className="text-xl text-primary font-medium">{exp.company}</h4>

                        <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground justify-center md:justify-start">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mt-4">
                          {exp.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 justify-center md:justify-start"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full self-center flex-shrink-0" />
                              <p className="text-muted-foreground leading-relaxed">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;