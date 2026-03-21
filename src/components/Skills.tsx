import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    color: "primary",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vite", level: 80 },
      { name: "HTML5/CSS3", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "accent",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: ".NET Core", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    color: "primary",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "React Native", level: 75 },
      { name: "Dart", level: 82 },
      { name: "BLoC Pattern", level: 78 },
      { name: "Provider", level: 80 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    color: "accent",
    skills: [
      { name: "Microsoft Azure", level: 88 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 70 },
      { name: "Firebase", level: 82 },
      { name: "GCP", level: 65 },
    ],
  },
  {
    id: "database",
    title: "Databases",
    color: "primary",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "SQL Server", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Firestore", level: 78 },
    ],
  },
  {
    id: "ai",
    title: "AI & ML",
    color: "accent",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "NLP", level: 75 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Model Training", level: 72 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeData = skillCategories.find(c => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 border border-primary/10 rotate-45 translate-x-16 sm:translate-x-32 -translate-y-16 sm:-translate-y-32" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <ScrollReveal variant="fadeRight">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                Technical Skills
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Technologies I
              <br />
              <span className="text-gradient">Work With</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-muted-foreground text-base sm:text-lg">
              A comprehensive toolkit for building modern, scalable applications across the full stack.
            </p>
          </ScrollReveal>
        </div>

        {/* Skills interactive section */}
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-4 sm:gap-6 lg:gap-8">
            {/* Category tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {skillCategories.map((category, i) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-left border transition-all duration-200 whitespace-nowrap flex-shrink-0 relative overflow-hidden ${
                    activeCategory === category.id
                      ? "border-primary bg-primary/10 text-primary shadow-[inset_0_0_20px_hsl(38_92%_55%_/_0.05)]"
                      : "border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active indicator bar */}
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      layoutId="activeSkillTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-muted-foreground/50">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="font-display font-semibold text-sm sm:text-base">{category.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Skills display with progress bars */}
            <div className="p-5 sm:p-8 md:p-12 border border-border bg-gradient-card min-h-[300px] sm:min-h-[400px] relative overflow-hidden">
              {/* Background number */}
              <div className="absolute -right-4 sm:-right-8 -bottom-8 sm:-bottom-16 text-[100px] sm:text-[150px] md:text-[200px] font-display font-bold text-muted/20 select-none pointer-events-none">
                {(skillCategories.findIndex(c => c.id === activeCategory) + 1).toString().padStart(2, '0')}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-foreground">
                    {activeData.title}
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {activeData.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.07 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs sm:text-sm font-mono text-foreground">{skill.name}</span>
                          <span className="text-[10px] font-mono text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-border/50 overflow-hidden relative">
                          <motion.div
                            className={`h-full ${activeData.color === "accent" ? "bg-accent" : "bg-primary"} relative`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 + index * 0.1, repeatDelay: 3 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Certification badge */}
        <ScrollReveal variant="scale" delay={0.4} className="mt-10 sm:mt-16 flex justify-center">
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 border border-primary/30 bg-gradient-card text-center sm:text-left"
            whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-lg sm:text-xl text-foreground">Microsoft Certified</p>
              <p className="text-muted-foreground font-mono text-xs sm:text-sm">Azure Developer Associate</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
