import { Code, Library, Wrench, Terminal, Globe, Server, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Skills = () => {
  const skillSections = [
    {
      title: "Programming Languages",
      icon: Terminal,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", description: "Modern ES6+ features & DOM manipulation" },
        { name: "HTML", description: "Semantic markup & accessibility" },
        { name: "CSS", description: "Responsive design & animations" },
        { name: "Python", description: "Scripting & backend development" },
        { name: "SQL", description: "Database queries & management" }
      ]
    },
    {
      title: "Frameworks",
      icon: Library,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", description: "Component-based UI development" },
        { name: "Bootstrap", description: "Rapid responsive UI building" },
        { name: "Express.js", description: "RESTful API & server framework" },
        { name: "Node.js", description: "Server-side JavaScript runtime" }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", description: "Version control & collaboration" },
        { name: "VS Code", description: "IDE configuration & extensions" },
        { name: "Postman", description: "API testing & documentation" },
        { name: "NPM", description: "Package management" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical competencies in web development
            and related technologies.
          </p>
        </div>

        {/* Skills Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <div
                key={sectionIndex}
                className="glow-card animate-slide-in-up"
                style={{ animationDelay: `${sectionIndex * 0.15}s` }}
              >
                {/* Section Header */}
                <div className="flex items-center mb-6 pb-4 border-b border-border/50">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mr-4 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                    >
                      <span
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                        bg-muted text-foreground border border-border/50
                        hover:border-primary/50 hover:text-primary hover:bg-primary/10
                        transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </span>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg
                        bg-card border border-border text-xs text-muted-foreground whitespace-nowrap
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 z-10 shadow-lg">
                        {skill.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center animate-slide-in-up animate-delay-400">
          <div className="glow-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Continuous Learning Journey</h2>
            <p className="text-muted-foreground mb-6">
              Committed to continuous improvement and staying updated with the latest technologies.
              Currently focusing on advanced React patterns and cloud technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Online Courses</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg hover:bg-accent/15 transition-colors">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Personal Projects</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg hover:bg-primary/15 transition-colors">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Coding Hours/Week</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg hover:bg-accent/15 transition-colors">
                <div className="text-2xl font-bold text-accent">1+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
