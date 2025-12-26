import { ArrowDown, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float-delayed" />
        
        {/* Floating Shapes */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float-delayed opacity-40" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold mb-4 opacity-0 animate-fade-up animation-delay-100">
            Hi, I'm{" "}
            <span className="text-gradient">Mrityunjay</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-mono mb-6 opacity-0 animate-fade-up animation-delay-200">
            <span className="text-primary">{"<"}</span>
            Frontend Developer
            <span className="text-primary">{" />"}</span>
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-0 animate-fade-up animation-delay-300">
            {["React.js", "JavaScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Frontend developer with hands-on experience in building responsive web 
            applications, API-integrated interfaces, and real-world project solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-up animation-delay-500">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
