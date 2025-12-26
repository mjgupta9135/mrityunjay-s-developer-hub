import { ExternalLink, Github, Utensils, Code, Film } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Tatanagar Treats",
    subtitle: "Food Ordering Website",
    description:
      "A responsive food ordering platform with real-time restaurant & menu data integrated via Swiggy API. Features modern UI/UX with seamless ordering flow.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Swiggy API"],
    icon: Utensils,
    github: "https://github.com",
    live: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Byte Builders",
    subtitle: "Online Code Editor",
    description:
      "Feature-rich online code editor supporting 10+ programming languages with separate input/output panels. Built with Monaco Editor for professional coding experience.",
    tech: ["React.js", "Tailwind CSS", "Monaco Editor", "Judge0 API"],
    icon: Code,
    github: "https://github.com",
    live: "#",
    gradient: "from-primary to-accent",
  },
  {
    title: "MoviePedia",
    subtitle: "Movie Database App",
    description:
      "Dynamic movie database application with infinite scrolling, custom hooks, and smooth UI. Integrated with TMDB API for comprehensive movie information.",
    tech: ["React.js", "Redux Toolkit", "SCSS", "TMDB API"],
    icon: Film,
    github: "https://github.com",
    live: "#",
    gradient: "from-violet-500 to-purple-600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            {"// Featured Work"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            Projects I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in React.js, 
            API integration, and modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card p-6 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-mono font-bold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
