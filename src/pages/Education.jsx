import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      institution: "Aditya College of Engineering",
      location: "Surramplaem, Andhra Pradesh",
      duration: "2020 - 2024",
      grade: "6.8 CGPA",
      achievements: [
        "Relevant Coursework: Web Development",
        "Final Year Project: Swarm Robot" ,
        "Active member of Programming Club"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Mpc",
      institution: "Aditya Juniour College",
      location: "Mandapeta, Andhra pradesh", 
      duration: "2018 - 2020",
      grade: "85%",
      achievements: [
        "Mathematics  specialization",
        "Participated in Inter-school Programming Competition"
      ]
    },
    {
      degree: "Secondary School Certificate",
      field: "General Studies",
      institution: "Sri Gowthami Muncipal High  School",
      location: "Mandapeta, AndraPradesh",
      duration: "2016 - 2018", 
      grade: "90%",
      achievements: [
        "School topper in Mathematics",
        "Captain of Computer Club",
        "Quiz Winner"
      ]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      provider: "Smart Internz",
      date: "2024",
      credentialId: "FCC001"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology and computer science.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center animate-slide-in-left">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Academic Background
          </h2>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`glow-card animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <div className="flex items-center text-primary font-semibold">
                        <Award className="w-4 h-4 mr-2" />
                        {edu.grade}
                      </div>
                    </div>
                    
                    <p className="text-lg text-accent font-medium mb-2">{edu.field}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.institution}, {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-slide-in-right">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certifications & Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`glow-card group hover:border-primary/50 animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{cert.provider}</p>
                  <p className="text-muted-foreground text-sm mb-2">{cert.date}</p>
                  <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;