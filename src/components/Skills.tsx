import { Database, Code, BarChart3, Cloud } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-accent">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
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
                    className="skill-badge text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills with Progress */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { skill: 'Data Analysis & ML', level: 90 },
              { skill: 'Full-Stack Development', level: 85 },
              { skill: 'Database Management', level: 88 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-medium mb-3 text-foreground">{item.skill}</div>
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
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