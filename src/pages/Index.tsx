import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code, 
  Brain, 
  Globe, 
  Trophy, 
  Star,
  Download,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Award,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Project data
  const projects = [
    {
      title: "OCBS System",
      description: "Full‑stack cinema booking app with real-time seat management and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/JoydeepPaul",
      image: "/placeholder.svg"
    },
    {
      title: "MERN Stack Project",
      description: "End‑to‑end modern web application with authentication and real-time features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/JoydeepPaul",
      image: "/placeholder.svg"
    },
    {
      title: "Rainfall Prediction",
      description: "ML‑based weather forecasting model using Random Forest and time series analysis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/JoydeepPaul",
      image: "/placeholder.svg"
    },
    {
      title: "House Price Prediction",
      description: "ML/DL pipeline for real‑estate analytics with advanced feature engineering.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "HTML/CSS"],
      githubUrl: "https://github.com/JoydeepPaul",
      image: "/placeholder.svg"
    },
    {
      title: "DSA Solutions",
      description: "Comprehensive collection of algorithm and pattern solutions in Java.",
      technologies: ["Java", "Algorithms", "Data Structures", "LeetCode"],
      githubUrl: "https://github.com/JoydeepPaul",
      image: "/placeholder.svg"
    }
  ];

  // Skills data
  const technicalSkills = [
    { name: "React", level: 85, category: "frontend" as const },
    { name: "Node.js", level: 80, category: "backend" as const },
    { name: "Python", level: 90, category: "languages" as const },
    { name: "Java", level: 85, category: "languages" as const },
    { name: "MongoDB", level: 75, category: "database" as const },
    { name: "Machine Learning", level: 80, category: "tools" as const },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90, category: "tools" as const },
    { name: "Communication", level: 85, category: "tools" as const },
    { name: "Team Collaboration", level: 88, category: "tools" as const },
    { name: "Time Management", level: 82, category: "tools" as const },
  ];

  const languages = [
    { name: "English", level: 95, category: "tools" as const },
    { name: "Bengali", level: 100, category: "tools" as const },
  ];

  // Experience data
  const experiences = [
    {
      title: "ML Research Intern",
      company: "IIT Kharagpur",
      period: "May–July 2025",
      description: "Developed a comprehensive rainfall prediction model using Random Forest algorithm under the guidance of Prof. Pabitra Mitra (CSE Dept). The project involved data preprocessing, feature engineering, model training, and evaluation with 85%+ accuracy. Implemented time series analysis and weather pattern recognition for accurate forecasting.",
      icon: Sparkles,
      type: "internship",
      githubUrl: "https://github.com/JoydeepPaul/Rainfall_Prediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      achievements: [
        "Achieved 85%+ prediction accuracy using Random Forest algorithm",
        "Implemented comprehensive data preprocessing and feature engineering",
        "Created visualizations for weather pattern analysis",
        "Developed both basic and enhanced model versions"
      ]
    }
  ];

  // Certificate data
  const certificates = [
    {
      title: "English Communication for Tech Professionals",
      issuer: "Arizona State University",
      period: "May 7, 2023",
      duration: "73 hours",
      description: "Enhanced English vocabulary and grammar for professional tech communication, including technical writing, interviewing skills, and business communication.",
      skills: ["Technical Writing", "Interviewing Skills", "Professional Networking", "Business Communication", "Grammar", "Vocabulary"],
      url: "https://www.coursera.org/account/accomplishments/verify/DZ6QHM3B947L",
      rating: 4.8,
      students: "16K"
    },
    {
      title: "Ethics, Technology and Engineering",
      issuer: "Eindhoven University of Technology",
      period: "April 8, 2023",
      duration: "19 hours",
      description: "Comprehensive understanding of ethical standards in technology and engineering, including safety assurance, risk management, and engineering design processes.",
      skills: ["Safety Assurance", "Risk Management Framework", "Engineering Practices", "Research", "Engineering Design Process", "Ethical Standards"],
      url: "https://www.coursera.org/account/accomplishments/verify/8XPSWSAJXVV4",
      rating: 4.6,
      students: "37K"
    },
    {
      title: "Programming in Python",
      issuer: "Meta",
      period: "March 22, 2023",
      duration: "45 hours",
      description: "Mastered foundational programming skills with Python syntax, object-oriented programming, algorithms, and web development with Django framework.",
      skills: ["Computational Thinking", "Algorithms", "Software Testing", "Computer Programming", "Django", "Object Oriented Programming", "Debugging", "Data Structures"],
      url: "https://www.coursera.org/account/accomplishments/verify/7NXE2K5ARVCB",
      rating: 4.6,
      students: "130K"
    }
  ];

  return (
    <div className={isLoaded ? "animate-in" : ""}>
      {/* Enhanced Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container flex items-center justify-between py-4">
          <a href="/" className="font-bold tracking-tight text-xl text-primary hover:text-primary-glow transition-colors">
            <Sparkles className="inline mr-2 h-5 w-5" />
            Joydeep Paul
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {["About", "Experience", "Skills", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
                         <div className="hidden md:flex gap-2">
               <a aria-label="LinkedIn" href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noopener noreferrer">
                 <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                   <Linkedin />
                 </Button>
               </a>
               <a aria-label="GitHub" href="https://github.com/JoydeepPaul" target="_blank" rel="noopener noreferrer">
                 <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                   <Github />
                 </Button>
               </a>
               <a aria-label="LeetCode" href="https://leetcode.com/u/JOYDEEP_PAUL/" target="_blank" rel="noopener noreferrer">
                 <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                   <Trophy />
                 </Button>
               </a>
             </div>
            <MobileNav />
          </div>
        </nav>
      </header>

      <main className="container">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center gap-12 py-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-20" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 -z-10 rounded-full opacity-30 animate-float" style={{ background: "var(--gradient-glow)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 -z-10 rounded-full opacity-20 animate-float delay-1000" style={{ background: "var(--gradient-radial)" }} />
          
          <div className="flex-1 space-y-8 text-center md:text-left z-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="animate-fade-in-up">
                  <Zap className="mr-2 h-3 w-3" />
                  Available for opportunities
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-fade-in-up text-foreground">
                  Hey there, I'm{" "}
                  <span className="text-gradient">Joydeep</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up delay-100">
                  Full-Stack Developer | AI & ML Enthusiast | Problem Solver
                </p>
                <p className="text-lg text-muted-foreground animate-fade-in-up delay-200 max-w-2xl">
                  Passionate about building scalable web apps and intelligent systems. I love collaborating on impactful projects and sharing innovative tech solutions.
                </p>
              </div>
              
                             <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up delay-300">
                 <Button size="lg" className="group" asChild>
                   <a href="#contact">
                     <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                     Get in Touch
                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </a>
                 </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                                 <Button variant="ghost" size="lg" className="group" asChild>
                   <a href="#projects">
                     <Target className="mr-2 h-4 w-4" />
                     View Projects
                   </a>
                 </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up delay-400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex-1 flex justify-center items-center mt-12 md:mt-0">
            {/* Enhanced profile image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full opacity-75 group-hover:opacity-100 blur-xl animate-glow transition-opacity duration-500" />
                             <div className="relative aspect-square w-72 md:w-96 rounded-full overflow-hidden ring-4 ring-background shadow-2xl transition-all duration-500 group-hover:scale-105">
                 <img
                   src="https://i.postimg.cc/Rh65MMMF/joydeep-profile.jpg"
                   alt="Profile picture of Joydeep Paul - Full Stack Developer"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               </div>
              
              {/* Floating badges */}
                             <div className="absolute -top-4 -right-4 animate-bounce">
                 <Badge variant="success" className="shadow-lg">
                   <Sparkles className="mr-1 h-3 w-3" />
                   Available
                 </Badge>
               </div>
               <div className="absolute -bottom-4 -left-4 animate-bounce delay-1000">
                 <Badge variant="skill" className="shadow-lg">
                   <Code className="mr-1 h-3 w-3" />
                   Developer
                 </Badge>
               </div>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="mr-2 h-3 w-3" />
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Passionate Developer & Problem Solver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a Computer Science Engineering student at Techno Main Salt Lake (2022–2026) with a passion for creating innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Education & Background</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">B.Tech in Computer Science Engineering</p>
                      <p className="text-sm text-muted-foreground">Techno Main Salt Lake (2022–2026)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-success/10">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">Higher Secondary (2022, UMHS)</p>
                      <p className="text-sm text-muted-foreground">85.54% (CS, Math, Physics, Chemistry)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-warning/10">
                      <Award className="h-4 w-4 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium">Secondary (2020, Uttarpara Model High School)</p>
                      <p className="text-sm text-muted-foreground">86.7%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Curious, collaborative, and committed to building products that make a difference. I believe in continuous learning and staying updated with the latest technologies.
              </p>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow shimmer-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                              <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/JoydeepPaul" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://leetcode.com/u/JOYDEEP_PAUL/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Trophy className="mr-2 h-4 w-4" />
                  LeetCode
                </Button>
              </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Calendar className="mr-2 h-3 w-3" />
              Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in technology and development, including internships, certifications, and notable projects.
            </p>
          </div>
          
          <div className="space-y-6">
                         {/* Internship Experience */}
             {experiences.map((exp, index) => (
               <Card key={index} className="hover:shadow-lg transition-shadow shimmer-card group">
                 <CardHeader>
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                       <exp.icon className="h-6 w-6 text-primary" />
                     </div>
                     <div className="flex-1">
                       <CardTitle className="text-lg group-hover:text-primary transition-colors">
                         {exp.title}
                       </CardTitle>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                         <span className="font-medium">{exp.company}</span>
                         <span>•</span>
                         <span>{exp.period}</span>
                         <Badge variant="success" className="ml-2">
                           {exp.type}
                         </Badge>
                       </div>
                     </div>
                   </div>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <p className="text-muted-foreground">{exp.description}</p>
                   
                   {/* Technologies Used */}
                   {exp.technologies && (
                     <div className="space-y-2">
                       <h4 className="text-sm font-medium text-foreground">Technologies Used:</h4>
                       <div className="flex flex-wrap gap-2">
                         {exp.technologies.map((tech) => (
                           <Badge key={tech} variant="tech" className="text-xs">
                             {tech}
                           </Badge>
                         ))}
                       </div>
                     </div>
                   )}
                   
                   {/* Key Achievements */}
                   {exp.achievements && (
                     <div className="space-y-2">
                       <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                       <ul className="space-y-1">
                         {exp.achievements.map((achievement, idx) => (
                           <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                             <span className="text-primary mt-1">•</span>
                             {achievement}
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}
                   
                   {/* GitHub Link */}
                   {exp.githubUrl && (
                     <div className="pt-2">
                       <Button
                         variant="outline"
                         size="sm"
                         asChild
                         className="hover:bg-primary hover:text-primary-foreground transition-colors"
                       >
                         <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                           <Github className="mr-2 h-3 w-3" />
                           View Project on GitHub
                         </a>
                       </Button>
                     </div>
                   )}
                 </CardContent>
               </Card>
             ))}

            {/* Certificates Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Professional Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow shimmer-card group">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base group-hover:text-accent transition-colors line-clamp-2">
                            {cert.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span className="font-medium">{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Duration: {cert.duration}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span>{cert.rating}</span>
                          <span>({cert.students})</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full mt-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Certificate
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Code className="mr-2 h-3 w-3" />
              Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise & Soft Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, programming languages, and soft skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              title="Technical Skills"
              icon={Code}
              skills={technicalSkills}
            />
            <SkillCard
              title="Soft Skills"
              icon={Brain}
              skills={softSkills}
            />
            <SkillCard
              title="Languages"
              icon={Globe}
              skills={languages}
            />
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Target className="mr-2 h-3 w-3" />
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do For You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development and AI/ML solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow shimmer-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full-stack web applications with modern frameworks, responsive design, and optimal performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow shimmer-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors w-fit">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Custom ML models, data analysis, and AI-powered solutions for your business needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow shimmer-card group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors w-fit">
                  <Target className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-lg group-hover:text-success transition-colors">Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Algorithm optimization, data structures, and efficient solutions for complex problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Code className="mr-2 h-3 w-3" />
              Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work, demonstrating technical skills and problem-solving abilities.
            </p>
          </div>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, index) => (
               <ProjectCard
                 key={index}
                 {...project}
                 className={`animate-fade-in-up`}
               />
             ))}
           </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 border-t border-border/50">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Mail className="mr-2 h-3 w-3" />
              Contact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          
          <ContactForm />
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Joydeep Paul
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer passionate about creating innovative solutions and building the future of technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/in/joydeep-paul-70371724a/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/JoydeepPaul" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://leetcode.com/u/JOYDEEP_PAUL/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Trophy className="h-4 w-4" />
                  LeetCode
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  joydeeppaul791@gmail.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +91 8240672326
                </div>
                                 <a 
                   href="https://www.google.com/maps/@22.6533704,88.3420857,16z?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                 >
                   <MapPin className="h-4 w-4" />
                   Bally, Howrah, WB
                 </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Joydeep Paul. All rights reserved. Built with ❤️ and modern web technologies.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;