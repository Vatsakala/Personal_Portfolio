import { ExternalLink, Github, ShoppingCart, Activity, Users, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Projects = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: 'Smart POS System',
      description: 'Comprehensive point-of-sale solution with inventory management, sales analytics, and customer relationship features.',
      icon: ShoppingCart,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      featured: true,
      gradient: 'from-primary to-blue-600',
    },
    {
      title: 'Disease Risk Prediction',
      description: 'Machine learning model that predicts disease risk factors using patient data and medical history analysis.',
      icon: Activity,
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      featured: true,
      gradient: 'from-accent to-purple-600',
    },
    {
      title: 'Community Platform',
      description: 'Social platform for connecting local communities with event management and discussion features.',
      icon: Users,
      tech: ['Django', 'PostgreSQL', 'Bootstrap', 'WebSockets'],
      featured: false,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Game Analytics Dashboard',
      description: 'Real-time analytics dashboard for mobile game performance tracking and user behavior analysis.',
      icon: Gamepad2,
      tech: ['React', 'D3.js', 'AWS', 'Python'],
      featured: false,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  // Shared classes so everything animates together
  const appear = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
  const together = 'transition-opacity transition-transform duration-700 delay-200 will-change-transform';

  return (
    <section
      id="projects"
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 ${together} ${appear}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${together} ${appear}`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend data science with practical applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card group ${together} ${appear}`}
            >
              <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="h-16 w-16 text-white/90" />
                {/* overlay uses opacity only */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity duration-300" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="group/btn">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform group/btn">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={`${together} ${appear}`}>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card group ${together} ${appear}`}
              >
                <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="h-12 w-12 text-white/90" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-3">
                    <Button variant="outline" size="sm" className="group/btn text-xs">
                      <Github className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform group/btn text-xs">
                      <ExternalLink className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Interested in More?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions to open source.
            </p>
            <Button className="btn-hero">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
