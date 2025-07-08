import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, ExternalLink, Menu, X, Code, Database, Globe, User, BookOpen, Target, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      description: "Java, Python, C++, PHP, JavaScript",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "HTML5, CSS3, Bootstrap, Tailwind CSS, Node.js",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      description: "MySQL, Git, GitHub, VS Code, Manual Testing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "CS Fundamentals",
      description: "Data Structures, Algorithms, OOP, OS Concepts",
      color: "from-orange-500 to-red-500"
    }
  ];

  const projects = [
    {
      title: "MoodBoard - Task & Emotion Tracker",
      description: "An innovative emotion-tagged daily planner with task tracking capabilities, featuring drag-and-drop functionality and mood analytics.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "📊",
      status: "In Progress",
      githubUrl: "https://github.com/sumitttt4/MoodBoard.git",
      features: ["Drag-and-drop tasks", "Mood analytics", "Responsive UI"]
    },
    {
      title: "Chemical Cleaners - Business Website",
      description: "A comprehensive multi-page responsive website for a fictional brand with cross-device compatibility and modern design.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: "🏢",
      status: "Completed",
      githubUrl: "https://github.com/sumitttt4/chemicalcleanes.git",
      features: ["Multi-page design", "Cross-device compatibility", "Manual testing"]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Acharya Institute of Graduate Studies, Bengaluru",
      duration: "2022 - 2024",
      cgpa: "7.91",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St. Columba's College, Hazaribagh",
      duration: "2019 - 2022",
      cgpa: "7.76",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`
        ${mobile 
          ? 'block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors' 
          : 'relative text-gray-300 hover:text-white transition-colors font-medium'
        }
        ${activeSection === href ? 'text-white' : ''}
      `}
    >
      {children}
      {!mobile && (
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${
          activeSection === href ? 'w-full' : 'group-hover:w-full'
        }`} />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Sumit Sharma
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="skills">Skills</NavLink>
                <NavLink href="projects">Projects</NavLink>
                <NavLink href="education">Education</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="education" mobile>Education</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sumit Kumar Sharma
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Aspiring Software Development Engineer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about building scalable applications with strong problem-solving skills and a drive for innovation. Seeking opportunities to create impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl">
                <User className="w-32 h-32 opacity-80" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Objective</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Seeking a 2-month full-time internship at Amazon in Summer 2025 to leverage strong 
                    problem-solving skills and programming knowledge in building scalable applications.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-blue-400 mb-2">Problem Solving</h4>
                  <p className="text-gray-300 text-sm">Strong logical reasoning & debugging skills</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-blue-400 mb-2">Adaptability</h4>
                  <p className="text-gray-300 text-sm">Quick learner in fast-paced environments</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-blue-400 mb-2">Code Quality</h4>
                  <p className="text-gray-300 text-sm">Clean, maintainable, and efficient code</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-blue-400 mb-2">Collaboration</h4>
                  <p className="text-gray-300 text-sm">Effective in team-based development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 group border border-gray-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 group border border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'In Progress' 
                        ? 'bg-yellow-900 text-yellow-400' 
                        : 'bg-green-900 text-green-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              I'm actively seeking internship opportunities and would love to discuss how I can contribute 
              to your team. Feel free to reach out for collaborations or just to connect!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:sumitsharma9128@gmail.com"
                className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 text-gray-300 hover:text-blue-400 border border-gray-700"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">sumitsharma9128@gmail.com</span>
              </a>
              
              <a
                href="https://github.com/sumitttt4"
                className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 text-gray-300 hover:text-blue-400 border border-gray-700"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              
              <div className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg shadow-md border border-gray-700">
                <span className="text-2xl">📱</span>
                <span className="font-medium text-gray-300">+91 7050862367</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Sumit Kumar Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
