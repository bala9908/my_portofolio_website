import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bala9908', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kone-balachandra-510390213', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:chandrabala547@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-slide-in-up">
              <p className="text-accent font-medium mb-4 text-lg">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Kone Balachandra</span>
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                <span className="typing-animation text-foreground">
                  MERN Full Stack Developer
                </span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                Passionate fresher with strong foundation in MongoDB, Express.js, React, and Node.js. 
                Ready to bring innovative ideas to life through clean, efficient code and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in-up animate-delay-200">
              <a href="/Balaresume-2025 jun.pdf" download >
              <Button className="hero-button group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
                </a>
              <Link to="/projects" >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                 
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
                </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-slide-in-up animate-delay-300">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow-card"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image/Illustration */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right animate-delay-100">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center float-animation">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-card flex items-center justify-center text-6xl lg:text-8xl font-bold gradient-text">
                  <img 
                    src="/balaimage.jpg" 
                    alt="Kone Balachandra" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-primary rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-accent rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
