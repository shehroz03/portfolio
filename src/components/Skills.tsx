import { Code2, Database, Smartphone } from 'lucide-react';
import { Card } from './ui/card';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const skills = [
  {
    icon: Code2,
    title: 'Web Apps & Dashboards',
    description: 'Building modern React/Next.js dashboards, admin panels, and landing pages with clean UX and animations.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'APIs, Backends & Automation',
    description: 'Designing Node.js/Express APIs, MongoDB databases, and automation/scraping tools for real client workflows.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Automation'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Real-Time Apps',
    description: 'Creating Flutter and Firebase apps with auth, real-time data, and cloud integration.',
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Cloud Functions'],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative" ref={ref}>
        <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl tracking-tight">Skills & Stack</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building modern web and mobile applications from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors icon-hover">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}