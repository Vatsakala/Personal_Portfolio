// components/About.tsx
import { Award, BookOpen, Code, Target, Sparkles, Zap, Lightbulb, Heart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import Background from '@/components/Background';

const About = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const stats = [
    { icon: Award, label: 'GPA', value: '4.0', bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Internships', value: '3', bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
    { icon: Target, label: 'Projects', value: '15+', bgColor: 'bg-gradient-to-br from-green-400 to-teal-400' },
    { icon: BookOpen, label: 'Certifications', value: '5+', bgColor: 'bg-gradient-to-br from-pink-500 to-fuchsia-500' },
  ];

  return (
    <section id="about" ref={targetRef} className="relative min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <Background />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 animate-scale-in">
            About Me
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Driven by curiosity and passion for innovation
          </p>
        </div>

        {/* Two-column Grid */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left - Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className={`transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-4'
            }`}>
              <div className="relative group">
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

          {/* Right - Journey */}
          <div className="lg:col-span-3 space-y-8">
            <div className={`bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-xl p-6 sm:p-8 transition-all duration-700 delay-500 ${
              isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 translate-y-8'
            }`}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                My Journey
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-100 text-[1.05rem] leading-relaxed font-normal">
                <p>
                  I'm a dedicated MIS student with a passion for transforming complex data into actionable insights. 
                  My academic journey includes hands-on experience through internships and personal projects, 
                  applying <span className="text-blue-600 dark:text-violet-400 font-medium">machine learning</span>, <span className="text-cyan-600 dark:text-cyan-400 font-medium">data analysis</span>, and <span className="text-blue-600 dark:text-violet-400 font-medium">full-stack development</span>.
                </p>
                <p>
                  I believe in technology’s power to create positive change. From building predictive models for 
                  disease risk assessment to developing intuitive POS systems, I aim to make a meaningful impact in <span className="text-cyan-600 dark:text-cyan-400 font-medium">data science</span> and <span className="text-blue-600 dark:text-violet-400 font-medium">software development</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className={`mt-8 transition-all duration-700 delay-700 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 dark:text-white text-center">
            Key Highlights
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} p-4 text-center rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-3 shadow-md">
                  <stat.icon className="h-7 w-7 text-black" />
                </div>
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="text-white/80 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
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
