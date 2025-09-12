// src/components/About.tsx
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  // Logo files served from /public
  // `tint` is used only for the small border around the white bubble (brand hint).
  const stats = [
    { img: '/GPA.svg',        alt: 'GPA',            label: "Texas A&M, MIS",                     value: '3.8/4 GPA',          tint: '#500000' }, // maroon
    { img: '/TT.png',         alt: 'Internships',    label: 'In Data, ML and Product Design',     value: '4 Internships',       tint: '#1DA1F2' }, // blue
    { img: '/Projects.svg',   alt: 'Projects',       label: 'Blending data, AI & full-stack dev', value: '15+ Projects',        tint: '#6B7280' }, // gray (GitHub vibe)
    { img: '/Certificate.svg',alt: 'Certifications', label: 'AWS, Azure, Scrum',                  value: '15+ Certifications',  tint: '#FF9900' }, // AWS orange
  ];

  // Theme-friendly gradients (cool blues/violets) – one per card, same order as stats
  const themeGradients = [
    'from-[hsl(var(--primary))] to-[#22d3ee]',  // blue -> cyan
    'from-[#6366f1] to-[hsl(var(--accent))]',   // indigo -> violet
    'from-[#0ea5e9] to-[#7c3aed]',              // sky -> violet
    'from-[#14b8a6] to-[hsl(var(--accent))]',   // teal -> violet
  ];

  return (
    <section
      id="about"
      ref={targetRef}
      className={`scroll-mt-15 relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h1 className="text-4xl font-bold mb-4 hero-accent">About Me</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by curiosity and passion for innovation
          </p>
        </div>

        {/* Two-column Grid */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div
              className={`transition-all duration-700 delay-300 ${
                isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-4'
              }`}
            >
              <div className="relative group">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-lg">
                  <img
                    src="/profile-photo.jpg"
                    alt="Vatsa Kala"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Journey */}
          <div className="lg:col-span-3 space-y-8">
            <div
              className={`p-6 sm:p-8 transition-all duration-700 delay-500 ${
                isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 translate-y-8'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-foreground/80 text-[1.05rem] leading-relaxed font-normal">
                <p>
                  My journey in tech started with a fascination for how systems talk to each other and quickly grew into a passion for making data and AI work for people. I’ve explored this through internships, research, and projects that span data engineering, machine learning, and product design. Whether it was scaling a massive trading data platform, creating predictive models for healthcare, or building user-focused tools, I’ve always aimed to balance technical depth with real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div
          className={`mt-12 transition-all duration-700 delay-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground text-center">Key Highlights</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${themeGradients[index]} p-6 text-center rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                {/* Always-white bubble with brand-tinted border */}
                <div
                  className="
                    inline-flex items-center justify-center
                    w-14 h-14 rounded-full mb-3
                    bg-white dark:bg-white
                    shadow-md mix-blend-normal
                  "
                  style={{
                    // subtle 2px border using brand tint @ ~25% opacity
                    boxShadow: `0 0 0 2px ${stat.tint}40`,
                  }}
                >
                  <img
                    src={stat.img}
                    alt={stat.alt}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Light-on-dark for themed gradients */}
                <div className="text-xl font-semibold text-white drop-shadow-sm">{stat.value}</div>
                <div className="text-white/90 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default About;
