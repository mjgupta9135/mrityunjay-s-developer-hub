import { Trophy, Award, Medal, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "All India Rank 55",
    subtitle: "Coding World Cup — Coding Ninjas",
    description: "Secured exceptional rank among thousands of participants in competitive coding challenge.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Award,
    title: "Institute Rank 3",
    subtitle: "GeeksforGeeks",
    description: "Solved 700+ problems with top 3 ranking in college, demonstrating strong problem-solving skills.",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Medal,
    title: "Runner-Up",
    subtitle: "Web Mania Hackathon",
    description: "Secured 2nd position at RVSCET Jamshedpur hackathon, showcasing web development expertise.",
    color: "from-accent to-purple-400",
  },
  {
    icon: GraduationCap,
    title: "NPTEL Certifications",
    subtitle: "IITs Courses",
    description: "Completed certifications in Problem Solving, DAA, and DBMS from prestigious IITs.",
    color: "from-green-400 to-emerald-500",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            {"// Recognition & Awards"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that reflect my dedication to continuous 
            learning and competitive programming.
          </p>
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden sm:block" />

            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`relative flex flex-col sm:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 sm:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)] hidden sm:block" />

                {/* Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <achievement.icon className="w-7 h-7 text-background" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-mono font-bold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-2">
                          {achievement.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
