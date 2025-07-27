import { Award, BookOpen, Code, Target } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  
  const stats = [
    { icon: Award, label: 'GPA', value: '4.0', color: 'text-primary' },
    { icon: Code, label: 'Internships', value: '3', color: 'text-accent' },
    { icon: Target, label: 'Projects', value: '15+', color: 'text-primary' },
    { icon: BookOpen, label: 'Certifications', value: '5+', color: 'text-accent' },
  ];

  return (
    <section 
      id="about" 
      ref={targetRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by curiosity and passion for innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a dedicated MIS student with a passion for transforming complex data into actionable insights. 
                My academic journey has been complemented by hands-on experience through internships and personal projects, 
                where I've applied machine learning, data analysis, and full-stack development skills to solve real-world challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to create positive change. Whether it's building predictive models for 
                disease risk assessment or developing intuitive POS systems, I'm committed to leveraging my technical skills 
                to make a meaningful impact in the world of data science and software development.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">What Drives Me</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Solving complex problems through data-driven solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Building scalable and user-centric applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous learning and staying ahead of technology trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributing to impactful projects that benefit communities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-300 ${
                  index === 0 ? 'delay-600' : 
                  index === 1 ? 'delay-700' : 
                  index === 2 ? 'delay-800' : 'delay-900'
                } ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;