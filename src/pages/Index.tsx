
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Heart } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, forecasts, and interactive maps using multiple weather APIs.",
      tech: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "First Line of Code",
      description: "Started with HTML and CSS while studying computer science fundamentals."
    },
    {
      year: "2019",
      title: "JavaScript Journey",
      description: "Dove deep into JavaScript and built my first interactive web applications."
    },
    {
      year: "2020",
      title: "React & Modern Development",
      description: "Learned React and modern development tools, started contributing to open source."
    },
    {
      year: "2021",
      title: "Full-Stack Development",
      description: "Expanded to backend development with Node.js and database management."
    },
    {
      year: "2022",
      title: "Professional Experience",
      description: "Joined my first development team and worked on production applications."
    },
    {
      year: "2024",
      title: "Continuous Learning",
      description: "Currently exploring new technologies and building innovative projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800">John Doe</h1>
            </div>
            <div className="hidden md:block">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                  <TabsTrigger value="about" className="data-[state=active]:bg-white">About Me</TabsTrigger>
                  <TabsTrigger value="projects" className="data-[state=active]:bg-white">Projects</TabsTrigger>
                  <TabsTrigger value="story" className="data-[state=active]:bg-white">How I Began</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="px-4 py-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-100">
              <TabsTrigger value="about" className="text-xs data-[state=active]:bg-white">About</TabsTrigger>
              <TabsTrigger value="projects" className="text-xs data-[state=active]:bg-white">Projects</TabsTrigger>
              <TabsTrigger value="story" className="text-xs data-[state=active]:bg-white">Story</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 md:pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* About Me Section */}
            <TabsContent value="about" className="mt-6 animate-fade-in">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Profile Section */}
                <div className="lg:col-span-1">
                  <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                          <img 
                            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                            alt="Profile" 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">John Doe</h2>
                      <p className="text-slate-600 mb-4">Full-Stack Developer</p>
                      
                      {/* Contact Info */}
                      <div className="space-y-2 mb-6 text-sm text-slate-600">
                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>25 years old</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        <Button variant="outline" size="icon" className="hover:bg-slate-100">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-blue-50">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="hover:bg-red-50">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* About Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-slate-800">About Me</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <p className="text-lg leading-relaxed text-slate-700 mb-4">
                        Hello! I'm a passionate full-stack developer with over 5 years of experience creating 
                        digital solutions that make a difference. I specialize in modern web technologies 
                        and love turning complex problems into simple, beautiful designs.
                      </p>
                      <p className="text-lg leading-relaxed text-slate-700 mb-4">
                        When I'm not coding, you can find me exploring new technologies, contributing to 
                        open-source projects, or enjoying the great outdoors. I believe that great software 
                        is built by teams who care about both the user experience and the code quality.
                      </p>
                      <p className="text-lg leading-relaxed text-slate-700">
                        I'm always excited to collaborate on interesting projects and meet fellow developers. 
                        Feel free to reach out if you'd like to connect!
                      </p>
                    </CardContent>
                  </Card>

                  {/* Skills Section */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-slate-800">Skills & Interests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Technical Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "Git"].map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Interests
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["Photography", "Hiking", "Music Production", "Open Source", "AI/ML", "Gaming"].map((interest) => (
                              <span key={interest} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Projects Section */}
            <TabsContent value="projects" className="mt-6 animate-fade-in">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Here are some of the projects I've worked on. Each one represents a learning journey 
                  and a step forward in my development career.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800">{project.title}</CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* How I Began Section */}
            <TabsContent value="story" className="mt-6 animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">How I Began</h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Every developer has a story. Here's mine - from curiosity to career, 
                    from first "Hello World" to building real applications.
                  </p>
                </div>

                {/* Story Content */}
                <Card className="shadow-lg mb-8">
                  <CardContent className="p-8">
                    <div className="prose prose-lg prose-slate max-w-none">
                      <p className="text-lg leading-relaxed mb-6">
                        It all started in high school when I stumbled upon a simple HTML tutorial. 
                        I was fascinated by how a few lines of code could create something visible 
                        on the screen. That first "Hello World" moment was magical - seeing text 
                        appear in a browser window felt like pure creation.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        What began as curiosity quickly turned into obsession. I spent countless 
                        nights learning CSS, making my first websites more colorful and interactive. 
                        The moment I discovered JavaScript and could make things move and respond 
                        to user input, I knew I had found my calling.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        College opened up new worlds - data structures, algorithms, and the theory 
                        behind the magic. But it was the practical projects, the late-night coding 
                        sessions with friends, and the thrill of deploying my first real application 
                        that truly shaped my journey.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Today, every new project still gives me that same excitement I felt when 
                        I wrote my first line of code. Technology keeps evolving, and so do I - 
                        always learning, always building, always excited about what's possible.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">My Journey Timeline</h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    
                    {timeline.map((item, index) => (
                      <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}>
                        {/* Timeline dot */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                        
                        {/* Content card */}
                        <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                              </div>
                              <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                              <p className="text-slate-600">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300">
            © 2024 John Doe. Built with React and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
