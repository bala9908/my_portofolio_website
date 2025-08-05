import { Code, Database, Globe, Settings, Wrench, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 85, description: "Component-based UI development" },
        { name: "JavaScript (ES6+)", level: 80, description: "Modern JavaScript features" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic markup & responsive design" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
        { name: "Responsive Design", level: 88, description: "Mobile-first approach" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 65, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 60, description: "Web application framework" },
        { name: "RESTful APIs", level: 70, description: "API design & development" },
        { name: "Authentication", level: 60, description: "JWT & session management" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database, 
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 80, description: "NoSQL document database" },
        { name: "Mongoose", level: 78, description: "MongoDB object modeling" },
        { name: "SQL Basics", level: 65, description: "Relational database concepts" }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-orange-500 to-red-500", 
      skills: [
        { name: "Git & GitHub", level: 85, description: "Version control & collaboration" },
        { name: "VS Code", level: 90, description: "IDE configuration & extensions" },
        { name: "Postman", level: 80, description: "API testing & documentation" },
        { name: "NPM/Yarn", level: 82, description: "Package management" }
      ]
    },
    {
      title: "Programming Concepts",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Problem Solving", level: 80, description: "Logical thinking & debugging" },
        { name: "Async Programming", level: 75, description: "Promises, async/await" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Team Collaboration", level: 85, description: "Working with development teams" },
        { name: "Communication", level: 80, description: "Technical documentation" },
        { name: "Quick Learning", level: 90, description: "Adapting to new technologies" },
        { name: "Problem Analysis", level: 82, description: "Breaking down complex problems" }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-foreground">{skill.name}</h4>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out hover:scale-105"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

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
            A comprehensive overview of my technical competencies in MERN stack development and related technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex}
                className={`glow-card animate-slide-in-up`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="animate-slide-in-left" style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}>
                      <SkillBar skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center animate-slide-in-up animate-delay-400">
          <div className="glow-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Continuous Learning Journey</h2>
            <p className="text-muted-foreground mb-6">
              As a fresher, I'm committed to continuous improvement and staying updated with the latest technologies. 
              Currently focusing on advanced React patterns, TypeScript, and exploring cloud technologies like AWS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Online Courses</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Personal Projects</div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Coding Hours/Week</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
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