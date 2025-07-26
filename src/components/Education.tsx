import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
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
    {
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      date: '2024',
      icon: '🏅'
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera (Andrew Ng)',
      date: '2024',
      icon: '🧠'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️'
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      icon: '🐍'
    },
    {
      name: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2023',
      icon: '📊'
    }
  ];

  const leadership = [
    {
      role: 'Project Lead',
      organization: 'Rotaract Club',
      description: 'Led 6+ community service events, managing teams of 15+ volunteers',
      impact: '500+ community members served'
    },
    {
      role: 'Peer Mentor',
      organization: 'MIS Student Organization',
      description: 'Mentored incoming freshmen in academic and career planning',
      impact: '20+ students mentored'
    },
    {
      role: 'Data Analytics Team Captain',
      organization: 'University Case Competition',
      description: 'Led team to 2nd place in regional business case competition',
      impact: 'Top 3 finish among 50+ teams'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hero-accent">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <div key={index} className="glass-card p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4 mb-6 lg:mb-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-primary font-medium">{edu.school}</h4>
                    <div className="text-muted-foreground mt-2">
                      <p>{edu.location} • {edu.duration}</p>
                      <p className="font-medium text-accent">{edu.status}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold text-foreground">{edu.gpa}</div>
                  <div className="text-muted-foreground">Cumulative GPA</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4">Relevant Coursework</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4">Academic Achievements</h5>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent text-sm font-medium">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Leadership & Involvement</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">{item.role}</h4>
                </div>
                <p className="text-accent font-medium mb-3">{item.organization}</p>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;