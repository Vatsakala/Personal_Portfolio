import { Award, BookOpen, Code, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const stats = [
    { icon: Award, label: 'GPA', value: '3.8' },
    { icon: Code, label: 'Internships', value: '4' },
    { icon: Target, label: 'Projects', value: '15+' },
    { icon: BookOpen, label: 'Certifications', value: '15+' },
  ];

  return (
    <section
      id="about"
      ref={targetRef}
      className={`scroll-mt-15 relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ${
            isIntersecting
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h1 className="text-4xl font-bold mb-4 hero-accent">
            About Me
          </h1>
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
                isIntersecting
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : 'opacity-0 -translate-x-8 translate-y-4'
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
                isIntersecting
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : 'opacity-0 translate-x-8 translate-y-8'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-foreground/80 text-[1.05rem] leading-relaxed font-normal">
                <p>
                  I'm a dedicated MIS student with a passion for transforming complex data into actionable insights. 
                  My academic journey includes hands-on experience through internships and personal projects, 
                  applying <span className="text-blue-500 font-medium">machine learning</span>, <span className="text-cyan-500 font-medium">data analysis</span>, and <span className="text-violet-500 font-medium">full-stack development</span>.
                </p>
                <p>
                  I believe in technology’s power to create positive change. From building predictive models for 
                  disease risk assessment to developing intuitive POS systems, I aim to make a meaningful impact in <span className="text-cyan-500 font-medium">data science</span> and <span className="text-violet-500 font-medium">software development</span>.
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground text-center">
            Key Highlights
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-indigo-500 to-purple-500',
                'from-green-500 to-teal-500',
                'from-pink-500 to-fuchsia-500'
              ];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors[index]} p-6 text-center rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-background/90 rounded-full mb-3 shadow-md">
                    <stat.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-foreground/80 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
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
