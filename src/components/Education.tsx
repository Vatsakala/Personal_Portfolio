import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Education = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  
  const education = [
    {
      degree: 'Bachelor of Science in Management Information Systems',
      school: 'Texas A&M University',
      location: 'College Station, TX',
      duration: '2022 - 2025',
      gpa: '4.0/4.0',
      status: 'Expected Graduation: May 2025',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Business Intelligence & Analytics',
        'Systems Analysis & Design',
        'Project Management',
        'Statistics for Business'
      ],
      achievements: [
        "Dean's List - All Semesters",
        'Summa Cum Laude Candidate',
        'MIS Academic Excellence Award'
      ]
    }
  ];

  const certifications = [
    { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', date: '2024', icon: '🏅' },
    { name: 'Deep Learning Specialization', issuer: 'Coursera (Andrew Ng)', date: '2024', icon: '🧠' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023', icon: '☁️' },
    { name: 'Python for Data Science', issuer: 'IBM', date: '2023', icon: '🐍' },
    { name: 'Tableau Desktop Specialist', issuer: 'Tableau', date: '2023', icon: '📊' }
  ];

  const leadership = [
    { role: 'Project Lead', organization: 'Rotaract Club', description: 'Led 6+ community service events, managing teams of 15+ volunteers', impact: '500+ community members served' },
    { role: 'Peer Mentor', organization: 'MIS Student Organization', description: 'Mentored incoming freshmen in academic and career planning', impact: '20+ students mentored' },
    { role: 'Data Analytics Team Captain', organization: 'University Case Competition', description: 'Led team to 2nd place in regional business case competition', impact: 'Top 3 finish among 50+ teams' }
  ];

  return (
    <section 
      id="education" 
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        {/* Education */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {education.map((edu, index) => (
            <div key={index} className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{edu.degree}</h3>
                    <h4 className="text-xl text-primary font-medium">{edu.school}</h4>
                    <p className="text-muted-foreground">{edu.location} • {edu.duration}</p>
                    <p className="text-muted-foreground">{edu.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{edu.gpa}</div>
                  <div className="text-muted-foreground">GPA</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Key Coursework
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Achievements
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mb-16 transition-all duration-700 delay-400 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`p-6 text-center hover:scale-105 transition-all duration-300 ${
                  index === 0 ? 'delay-500' : 
                  index === 1 ? 'delay-600' : 
                  index === 2 ? 'delay-700' : 
                  index === 3 ? 'delay-800' : 'delay-900'
                } ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-primary text-sm font-medium">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className={`transition-all duration-700 delay-500 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Leadership & Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((role, index) => (
              <div 
                key={index} 
                className={`p-6 transition-all duration-300 ${
                  index === 0 ? 'delay-600' : 
                  index === 1 ? 'delay-700' : 'delay-800'
                } ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{role.role}</h4>
                <p className="text-primary font-medium mb-3">{role.organization}</p>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{role.description}</p>
                <div className="text-accent text-sm font-medium">{role.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
