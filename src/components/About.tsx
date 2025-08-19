import { Award, BookOpen, Code, Target, Sparkles, Zap, Lightbulb, Heart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  
  const stats = [
    { icon: Award, label: 'GPA', value: '4.0', color: 'text-white', bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Internships', value: '3', color: 'text-white', bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
    { icon: Target, label: 'Projects', value: '15+', color: 'text-white', bgColor: 'bg-gradient-to-br from-green-400 to-teal-400' },
    { icon: BookOpen, label: 'Certifications', value: '5+', color: 'text-white', bgColor: 'bg-gradient-to-br from-pink-500 to-fuchsia-500' },
  ];

  const passions = [
    { 
      icon: Sparkles, 
      title: 'Problem Solving', 
      subtitle: 'Complex data-driven solutions',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    { 
      icon: Zap, 
      title: 'Innovation', 
      subtitle: 'Scalable user-centric apps',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    { 
      icon: Lightbulb, 
      title: 'Learning', 
      subtitle: 'Stay ahead of tech trends',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    { 
      icon: Heart, 
      title: 'Impact', 
      subtitle: 'Benefit communities',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
  ];

  return (
    <section 
      id="about" 
      ref={targetRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 relative overflow-hidden ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)]"></div>
      
      {/* Content Container with Relative Positioning */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header with Gradient Text and Animation */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 animate-scale-in">
            About Me
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Driven by curiosity and passion for innovation
          </p>
        </div>

        {/* Full-Width Responsive 2-Column Grid */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column - Profile Image (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className={`transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-4'
            }`}>
              {/* Profile Image Container */}
              <div className="relative group">
                {/* Profile Image with Glowing Border */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 ring-2 ring-blue-500/50 dark:ring-violet-500/50 ring-offset-4 ring-offset-slate-50 dark:ring-offset-[#0f0c29] shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Vatsa Kala" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Blocks (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* My Journey - Glassmorphism Card */}
            <div className={`bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-xl p-6 sm:p-8 transition-all duration-700 delay-500 ${
              isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 translate-y-8'
            }`}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                My Journey
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-100 text-[1.05rem] leading-relaxed font-normal">
                <p className="transition-all duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                  I'm a dedicated MIS student with a passion for transforming complex data into actionable insights. 
                  My academic journey has been complemented by hands-on experience through internships and personal projects, 
                  where I've applied <span className="text-blue-600 dark:text-violet-400 font-medium">machine learning</span>, <span className="text-cyan-600 dark:text-cyan-400 font-medium">data analysis</span>, and <span className="text-blue-600 dark:text-violet-400 font-medium">full-stack development</span> skills to solve real-world challenges.
                </p>
                <p className="transition-all duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                  I believe in the power of technology to create positive change. Whether it's building predictive models for 
                  disease risk assessment or developing intuitive POS systems, I'm committed to leveraging my technical skills 
                  to make a meaningful impact in the world of <span className="text-cyan-600 dark:text-cyan-400 font-medium">data science</span> and <span className="text-blue-600 dark:text-violet-400 font-medium">software development</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Section - Full Width Below */}
        <div className={`mt-4 sm:mt-6 lg:mt-8 transition-all duration-700 delay-700 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white text-center">
            Key Highlights
          </h3>
          
          {/* Stats Grid for Key Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`${stat.bgColor} p-3 sm:p-4 lg:p-6 text-center group hover:scale-105 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] transition-all duration-300 ease-in-out rounded-xl ${
                  index === 0 ? 'delay-800' : 
                  index === 1 ? 'delay-900' : 
                  index === 2 ? 'delay-1000' : 'delay-1100'
                } ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white text-black p-2 rounded-full shadow-md mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8`} />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-white">{stat.value}</div>
                <div className="text-white/80 font-medium text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations and Styles */}
      <style>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .hover\\:scale-105:hover {
            transform: none;
          }
          .hover\\:scale-110:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
