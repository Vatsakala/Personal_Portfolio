import { Database, Code, BarChart3, Cloud } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Skills = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'text-primary',
      skills: ['Python', 'SQL', 'C++', 'R', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Tools & Frameworks',
      icon: BarChart3,
      color: 'text-accent',
      skills: ['Power BI', 'Tableau', 'JIRA', 'React', 'Node.js', 'Django']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-primary',
      skills: ['MongoDB', 'MySQL', 'Oracle', 'STATA', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Cloud & Other',
      icon: Cloud,
      color: 'text-accent',
      skills: ['AWS', 'Kubernetes', 'Machine Learning', 'DSA', 'Git', 'Docker']
    }
  ];

  return (
    <section 
      id="skills" 
      ref={targetRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-card/20 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                index === 0 ? 'delay-300' : 
                index === 1 ? 'delay-400' : 
                index === 2 ? 'delay-500' : 'delay-600'
              } ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card rounded-2xl mb-4">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-badge text-center transition-all duration-300 ${
                      skillIndex === 0 ? 'delay-400' :
                      skillIndex === 1 ? 'delay-450' :
                      skillIndex === 2 ? 'delay-500' :
                      skillIndex === 3 ? 'delay-550' :
                      skillIndex === 4 ? 'delay-600' : 'delay-650'
                    } ${
                      isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills with Progress */}
        <div className={`mt-16 glass-card p-8 transition-all duration-700 delay-600 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { skill: 'Data Analysis & ML', level: 90 },
              { skill: 'Full-Stack Development', level: 85 },
              { skill: 'Database Management', level: 88 }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  index === 0 ? 'delay-700' : 
                  index === 1 ? 'delay-800' : 'delay-900'
                } ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-lg font-medium mb-3 text-foreground">{item.skill}</div>
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div 
                    className={`bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out ${
                      index === 0 ? 'delay-800' : 
                      index === 1 ? 'delay-900' : 'delay-1000'
                    } ${
                      isIntersecting ? 'w-full' : 'w-0'
                    }`}
                    style={{ width: isIntersecting ? `${item.level}%` : '0%' }}
                  ></div>
                </div>
                <div className="text-sm text-muted-foreground">{item.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;