import { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET Core", "FastAPI", "REST API", "GraphQL"],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: ["Flutter", "React Native", "Dart", "BLoC Pattern", "Provider"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Docker", "CI/CD", "Terraform", "Firebase", "GCP"],
  },
  {
    id: "database",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL", "Redis", "Firestore"],
  },
  {
    id: "ai",
    title: "AI & ML",
    skills: ["OpenAI API", "TensorFlow", "NLP", "Prompt Engineering", "Model Training"],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rotate-45 translate-x-32 -translate-y-32" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
              Technical Skills
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technologies I
            <br />
            <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </div>

        {/* Skills interactive section */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-4 text-left border transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-display font-semibold">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills display */}
          <div className="p-8 md:p-12 border border-border bg-gradient-card min-h-[400px] relative overflow-hidden">
            {/* Background number */}
            <div className="absolute -right-8 -bottom-16 text-[200px] font-display font-bold text-muted/20 select-none pointer-events-none">
              {(skillCategories.findIndex(c => c.id === activeCategory) + 1).toString().padStart(2, '0')}
            </div>
            
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group p-4 border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-6 px-8 py-6 border border-primary/30 bg-gradient-card">
            <div className="w-16 h-16 bg-gradient-gold flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-xl text-foreground">Microsoft Certified</p>
              <p className="text-muted-foreground font-mono text-sm">Azure Developer Associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
