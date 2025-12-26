import { Code2, Layers, Wrench, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Technologies",
    icon: Layers,
    skills: ["React.js", "Tailwind CSS", "MySQL", "Redux"],
    color: "from-primary to-accent",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["VS Code", "Eclipse", "Sublime Text", "Git"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Core CS Subjects",
    icon: BookOpen,
    skills: ["DSA", "DBMS", "OOPs", "OS", "Computer Networks"],
    color: "from-orange-500 to-amber-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            {"// Technical Skills"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and concepts I use to build 
            modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-6 h-6 text-background" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-mono font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span className="h-px w-12 bg-border" />
            <span className="font-mono">Always learning, always growing</span>
            <span className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
