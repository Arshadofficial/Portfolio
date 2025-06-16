import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  TrendingUp, 
  ChartBar, 
  Code, 
  Database, 
  Smartphone, 
  Users, 
  Sun, 
  Moon, 
  Home, 
  User, 
  BookOpen, 
  Briefcase, 
  MessageCircle,
  Menu,  // <-- Add this here
  X      // <-- Add this here
} from "lucide-react";
import { useTheme } from "next-themes";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import ArshadAhamed from 'public/Arshad_Ahamed.pdf';



const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const devSkills = [
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React.js", level: 80, icon: Code },
    { name: "Node.js", level: 75, icon: Code },
    { name: "MongoDB", level: 70, icon: Code },
    { name: "Firebase", level: 65, icon: Code },
    { name: "Tailwind CSS", level: 85, icon: Code },
  ];
  
  const softSkills = [
    { name: "Team Collaboration", level: 95, icon: Users },
    { name: "Communication", level: 90, icon: Users },
    { name: "Leadership", level: 85, icon: Users },
    { name: "Problem Solving", level: 90, icon: Users },
    { name: "Time Management", level: 88, icon: Users },
    { name: "Adaptability", level: 92, icon: Users },
  ];

  const projects = [
    {
      title: "Webapp Using AI/ML",
      period: "June 2025 - Present",
      description: "AI/ML-powered learning platform that delivers personalized educational experiences using machine learning algorithms.",
      technologies: ["React Native", "Node.js", "Express.js", "Firebase", "MongoDB", "AI/ML"],
      type: "Research",
      status: "In Progress",
      image: img5
    },
    {
      title: "Braille-and-Pen",
      period: "Mar 2025 - May 2025",
      description: "Inclusive shopping platform for visually impaired and sighted users with real-time data updates and authentication features.",
      technologies: ["Expo React Native", "Node.js", "Express.js", "Firebase", "MongoDB"],
      type: "Mobile App",
      status: "Completed",
      image: img2
    },
    {
      title: "DEV Link - Learning Platform",
      period: "Mar 2025 - May 2025",
      description: "Comprehensive full-stack learning platform for user management, content creation, and progress tracking.",
      technologies: ["React.js", "Spring Boot", "Firebase", "MongoDB", "Spring Security"],
      type: "Web App",
      status: "Completed",
      image: img1
    },
    {
      title: "AfterEncode - Hosting Platform",
      period: "Sep 2024 - Dec 2024",
      description: "Responsive web platform showcasing hosting plans and services with clean UI and smooth API integration.",
      technologies: ["React.js", "Node.js", "Axios", "Bootstrap"],
      type: "Web App",
      status: "Completed",
      image: img3
    },
    {
      title: "MSR Tailor Store",
      period: "Jan 2024 - Jun 2024",
      description: "Comprehensive web application for tailor shop management including rentals, inventory, and employee tasks.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "Web App",
      status: "Completed",
      image: img4
    }
    
  ];
  

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black/5 dark:from-background dark:via-background dark:to-black/20">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo/Home */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-2 ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => scrollToSection('home')}
            >
              <Home size={24} />
              <span className="hidden sm:inline">AA.</span>
            </Button>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'about', icon: User, label: 'About' },
              { id: 'skills', icon: ChartBar, label: 'Skills' },
              { id: 'projects', icon: Briefcase, label: 'Projects' },
              { id: 'getintouch', icon: MessageCircle, label: 'Get in Touch' },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Right: Resume + Mobile Menu Button */}
          <div className="flex items-center space-x-2">
         <a
            href="/Arshad%20Ahamed.pdf"
            download="Arshad_Ahamed.pdf"
            className="hidden sm:flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all duration-300"
          >
            Resume
          </a>




            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileNavOpen && (
          <div className="md:hidden pb-4 px-4 space-y-2">
            {[
              { id: 'about', icon: User, label: 'About' },
              { id: 'skills', icon: ChartBar, label: 'Skills' },
              { id: 'projects', icon: Briefcase, label: 'Projects' },
              { id: 'getintouch', icon: MessageCircle, label: 'Get in Touch' },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`w-full justify-start px-2 py-1.5 text-sm ${
                  activeSection === item.id
                    ? 'text-blue-500 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileNavOpen(false);
                }}
              >
                <item.icon size={14} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>


      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-20">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-black/10 dark:from-primary/10 dark:via-transparent dark:to-black/20" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32 relative">
    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
      
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover-glow hover-scale cursor-pointer">
          <TrendingUp size={14} className="sm:w-4 sm:h-4 hover-rotate" />
          Available for New Opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight hover-lift">
          {"Arshad Ahamed".split("").map((char, i) => (
            <span
              key={i}
              className={
                i < 6
                  ? "text-foreground transition-all duration-300 hover:text-primary inline-block"
                  : "text-gradient inline-block"
              }
              style={{
                animation: "typing 0.5s forwards",
                animationDelay: `${i * 0.04}s`,
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <style jsx>{`
          @keyframes typing {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed hover-lift transition-all duration-300 hover:text-foreground px-4 sm:px-0">
          Results-driven Software Engineer with hands-on experience in building web applications, mobile applications and fintech solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
        <a
            href="mailto:your-email@example.com?subject=Let's%20Connect&body=Hi%20there%2C%20I%20came%20across%20your%20portfolio%20and..."
            className="inline-flex items-center justify-center group hover-lift bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 w-full sm:w-auto px-4 py-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
            Get in Touch
          </a>

          <a
              href="https://github.com/Arshadofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center group hover-lift border border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-primary/30 w-full sm:w-auto px-4 py-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-300"
            >
              <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              View Projects
            </a>

        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground pt-4 sm:pt-6 space-y-2 sm:space-y-0">
          <div className="flex items-center gap-2 hover-scale cursor-pointer transition-all duration-300 hover:text-primary">
            <Phone size={14} className="sm:w-4 sm:h-4 hover-rotate" />
            +94 75-822-9303
          </div>
          <div className="flex items-center gap-2 hover-scale cursor-pointer transition-all duration-300 hover:text-primary">
            <Mail size={14} className="sm:w-4 sm:h-4 hover-rotate" />
            arshathofficial31@gmail.com
          </div>
        </div>
      </div>

      {/* Developer Card with Line-by-Line Animation */}
      <div className="flex-shrink-0 mt-8 lg:mt-0 space-y-6">
        <div className="relative w-[340px] sm:w-[400px] lg:w-[460px] xl:w-[500px] min-h-[380px] rounded-2xl overflow-hidden border border-muted bg-background/90 backdrop-blur-md px-6 py-5 font-mono text-left leading-relaxed text-muted-foreground animate-glow-card">
          {/* Top bar */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-auto text-xs text-muted-foreground">developer.js</span>
          </div>

          {/* Card Lines: Line-by-line fade in */}
          <div className="space-y-1">
            {[
              "// Software Engineer",
              "const developer = {",
              "  name: 'Arshad Ahamed',",
              "  skills: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],",
              "  experience: '3+ years in full-stack dev',",
              "  interests: ['UI/UX', 'APIs', 'Automation'],",
              "  learning: 'Next.js & AI integrations'",
              "};",
            ].map((line, i) => (
              <p
                key={i}
                style={{
                  opacity: 0,
                  animation: "fadeLine 0.5s ease-out forwards",
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Keyframes */}
  <style jsx>{`
    @keyframes fadeLine {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 12px rgba(99, 102, 241, 0.3), 0 0 24px rgba(99, 102, 241, 0.15);
      }
      50% {
        box-shadow: 0 0 24px rgba(99, 102, 241, 0.5), 0 0 36px rgba(99, 102, 241, 0.2);
      }
    }

    .animate-glow-card {
      animation: glow 4s ease-in-out infinite;
    }
  `}</style>
</section>


      {/* About Me Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-background dark:bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 hover-lift space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto transition-all duration-300 hover:text-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                I'm a passionate software engineer with a strong foundation in computer science and hands-on experience in building scalable web and mobile applications. My journey in tech started when I built my first website at 16, and since then I've been obsessed with creating digital solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies. I believe in continuous learning and pushing the boundaries of what's possible with code.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Education</p>
                  <p className="text-foreground font-semibold">Srilankan Institute of Information Technology (SLIIT)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Academic Experience</p>
                  <p className="text-foreground font-semibold">3+ Years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">arshathofficial31@gmail.com</p>
                </div>
              
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary">My Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Clean Code</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      I prioritize writing maintainable, efficient code following best practices and design patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">User-Centric</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Every solution starts with understanding user needs and delivering intuitive experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Continuous Growth</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      I dedicate time weekly to learn new technologies and improve my skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-background dark:bg-background/90">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14 sm:mb-20 space-y-4 sm:space-y-6 hover-lift">
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-500">Skills</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0 transition-all duration-300 hover:text-foreground">
        I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Programming Languages",
          icon: "💻",
          skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
        },
        {
          title: "Frontend Development",
          icon: "🌐",
          skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Backend Development",
          icon: "🛠️",
          skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
        },
        {
          title: "Databases",
          icon: "🗄️",
          skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
        },
        {
          title: "Tools & Technologies",
          icon: "⚙️",
          skills: ["Git", "Agile/Scrum"],
        },
        {
          title: "Design",
          icon: "🎨",
          skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
        },
      ].map((card) => (
        <div
          key={card.title}
          className="group hover-lift border-2 border-blue-100 dark:border-blue-800 bg-white dark:bg-card p-6 rounded-2xl shadow-sm transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400"
        >
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 flex items-center gap-2 mb-3">
            <span>{card.icon}</span> {card.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {card.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-700 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




 {/* Projects Section */}
<section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black/5 dark:bg-black/10">
  <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 hover-lift space-y-3 sm:space-y-4 md:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient px-2">
        Featured Projects
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto transition-all duration-300 hover:text-foreground text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-0">
        A showcase of recent work demonstrating expertise in full-stack development and modern technologies
      </p>
    </div>

    {/* Updated Grid: 3 cards per row on xl */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 xl:gap-10">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="group hover-lift hover-glow border-border/50 dark:border-border/70 bg-card/70 dark:bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
              <Badge
                variant="secondary"
                className="hover-scale cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs backdrop-blur-sm"
              >
                {project.type}
              </Badge>
              <Badge
                variant={project.status === "In Progress" ? "default" : "outline"}
                className="hover-scale cursor-pointer transition-all duration-300 hover:shadow-md text-xs backdrop-blur-sm"
              >
                {project.status}
              </Badge>
            </div>
          </div>

          <CardHeader className="space-y-2 sm:space-y-3 md:space-y-3 p-3 sm:p-4 md:p-4">
            <CardTitle className="group-hover:text-primary transition-colors duration-300 hover-scale cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
              {project.title}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {project.period}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-3 sm:p-4 md:p-4 pt-0 space-y-3 sm:space-y-3 md:space-y-4">
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 text-xs sm:text-sm md:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs hover-scale cursor-pointer border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* View Details Button as anchor tag */}
            <a
              href="https://github.com/Arshadofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale text-xs sm:text-sm inline-flex items-center px-2 py-1 rounded"
            >
              View Details
              <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      < section id="getintouch" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gradient mb-6">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you! Reach out via email, phone, or check my social profiles below.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button
            size="lg"
            className="group hover-lift bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => window.location.href = 'mailto:arshathofficial31@gmail.com'}
          >
            <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            arshatofficial31@gmail.com
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-primary/30 w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => window.location.href = 'tel:+94758229303'}
          >
            <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            +94 75-822-9303
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 hover-scale hover-glow w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => window.open('https://github.com/Arshadofficial', '_blank')}
            aria-label="GitHub"
          >
            <Github size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 hover-scale hover-glow w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => window.open('https://www.linkedin.com/in/arshad-ahamed31/', '_blank')}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Button>
        </div>
      </div>
      
        

    </section>
    

    </div>
  );
};

export default Index;
