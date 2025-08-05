import { ExternalLink, Github, Eye, Calendar, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-featured online shopping platform built with MERN stack featuring user authentication, product catalog, shopping cart, and secure payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js"],
      features: [
        "User registration and authentication",
        "Product browsing and search functionality", 
        "Shopping cart and wishlist",
        "Secure payment processing",
        "Order tracking and history",
        "Admin dashboard for inventory management"
      ],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/bala9908/E-commerce",
      status: "Completed",
      duration: "3 months",
      category: "Front end"
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      image: "/api/placeholder/400/250", 
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      features: [
        "Real-time task updates",
        "Team collaboration and assignment",
        "Progress tracking with charts",
        "File attachments and comments",
        "Deadline notifications",
        "Mobile responsive design"
      ],
      liveUrl: "https://example-taskmanager.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      status: "Completed", 
      duration: "2 months",
      category: "Full Stack"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides current weather conditions and 7-day forecasts with location-based services.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "OpenWeather API", "CSS3", "Geolocation API"],
      features: [
        "Current weather conditions",
        "7-day weather forecast", 
        "Location-based weather data",
        "Search by city functionality",
        "Responsive mobile design",
        "Weather data visualization"
      ],
      liveUrl: "https://example-weather.com", 
      githubUrl: "https://github.com/yourusername/weather-app",
      status: "Completed",
      duration: "2 weeks",
      category: "Frontend"
    },
    {
      title: "Personal Blog Platform",
      description: "A modern blogging platform with markdown support, comment system, and admin panel for content management.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Markdown"],
      features: [
        "Markdown blog post creation",
        "Comment system with moderation",
        "Admin panel for content management",
        "Category and tag organization",
        "SEO optimization",
        "Social media sharing"
      ],
      liveUrl: "https://example-blog.com",
      githubUrl: "https://github.com/yourusername/blog-platform", 
      status: "In Progress",
      duration: "1.5 months",
      category: "Full Stack"
    },
    {
      title: "Recipe Finder Application", 
      description: "A recipe discovery app that helps users find recipes based on available ingredients with nutritional information.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Recipe API", "Bootstrap", "Local Storage"],
      features: [
        "Recipe search by ingredients",
        "Nutritional information display",
        "Save favorite recipes",
        "Shopping list generation",
        "Recipe difficulty rating",
        "Dietary restriction filters"
      ],
      liveUrl: "https://example-recipes.com",
      githubUrl: "https://github.com/yourusername/recipe-finder",
      status: "Completed", 
      duration: "3 weeks",
      category: "Frontend"
    },
    {
      title: "Student Grade Management System",
      description: "A comprehensive system for managing student grades, attendance, and academic performance with role-based access.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"], 
      features: [
        "Student and teacher dashboards",
        "Grade tracking and analytics",
        "Attendance management",
        "Report generation",
        "Parent portal access",
        "Performance visualization"
      ],
      liveUrl: "https://example-grades.com",
      githubUrl: "https://github.com/yourusername/grade-management",
      status: "Completed",
      duration: "2.5 months", 
      category: "Full Stack"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Database className="w-4 h-4" />;
      case 'Frontend':
        return <Code className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my hands-on experience with MERN stack development. Each project demonstrates 
            different aspects of full-stack development and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glow-card group hover:border-primary/50 animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      +{project.features.length - 4} more features...
                    </p>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Duration: {project.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
{/*                   <Button 
                    size="sm" 
                    className="flex-1 hero-button"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10 w-100"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-in-up animate-delay-400">
          <div className="glow-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 gradient-text">More Projects Coming Soon!</h2>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects to expand my skills and explore different technologies. 
              Check back regularly or follow my GitHub for the latest updates.
            </p>
            <Button className="hero-button" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Repositories
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
