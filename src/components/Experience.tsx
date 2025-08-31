import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Experience = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      role: 'Data Science Intern',
      location: 'Austin, TX',
      type: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      highlights: [
        'Developed machine learning models that improved prediction accuracy by 25%',
        'Built automated data pipelines processing 10M+ records daily',
        'Created interactive dashboards using Tableau for executive reporting'
      ],
      logo: '🚀'
    },
    {
      company: 'Digital Solutions Corp',
      role: 'Software Development Intern',
      location: 'Dallas, TX',
      type: 'Hybrid',
      duration: 'Jan 2024 - May 2024',
      highlights: [
        'Contributed to full-stack web application serving 50K+ users',
        'Implemented RESTful APIs reducing data retrieval time by 40%',
        'Collaborated with agile team using JIRA and Git version control'
      ],
      logo: '💻'
    },
    {
      company: 'Analytics Plus',
      role: 'Business Analyst Intern',
      location: 'Houston, TX',
      type: 'On-site',
      duration: 'Jun 2023 - Aug 2023',
      highlights: [
        'Analyzed customer behavior data to identify $2M revenue opportunities',
        'Created comprehensive reports using Power BI and SQL queries',
        'Presented findings to C-level executives and stakeholders'
      ],
      logo: '📊'
    }
  ];

  return (
    <section 
      id="experience" 
      ref={targetRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through hands-on internships and real-world projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block transition-all duration-1000 delay-300 ${
            isIntersecting ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ${
                  index === 0 ? 'delay-400' : 
                  index === 1 ? 'delay-600' : 'delay-800'
                } ${
                  isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block transition-all duration-500 ${
                  index === 0 ? 'delay-500' : 
                  index === 1 ? 'delay-700' : 'delay-900'
                } ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                
                <div className="md:ml-16">
                  <div className="p-8 hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 lg:mb-0">
                        <div className="text-3xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                          <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              exp.type === 'Remote' ? 'bg-green-500/20 text-green-400' :
                              exp.type === 'Hybrid' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills developed section */}
        <div className="mt-16 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Key Skills Developed</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-primary text-lg font-semibold">Technical Skills</div>
              <p className="text-muted-foreground text-sm">Machine Learning, Data Analysis, Full-Stack Development</p>
            </div>
            <div className="space-y-2">
              <div className="text-accent text-lg font-semibold">Business Acumen</div>
              <p className="text-muted-foreground text-sm">Strategic Thinking, Process Optimization, Stakeholder Management</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary text-lg font-semibold">Leadership</div>
              <p className="text-muted-foreground text-sm">Team Collaboration, Project Management, Mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
