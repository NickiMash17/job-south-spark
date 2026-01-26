import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", ".NET Core", "FastAPI", "REST API", "GraphQL"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "React Native", "Dart", "BLoC Pattern", "Cross-Platform"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Docker", "CI/CD", "Terraform", "Firebase", "GCP"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL", "Firestore", "Redis"],
  },
  {
    category: "AI & ML",
    skills: ["OpenAI API", "TensorFlow", "NLP", "Prompt Engineering", "Model Training"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            Technical Skills
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-accent" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-2xl shadow-card border border-border">
            <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-foreground">Microsoft Certified</p>
              <p className="text-sm text-muted-foreground">Azure Developer Associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
