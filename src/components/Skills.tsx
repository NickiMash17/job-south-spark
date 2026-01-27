import { useState } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

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
            {/* Category tabs - horizontal scroll on mobile */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-left border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display font-semibold text-sm sm:text-base">{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills display */}
            <div className="p-5 sm:p-8 md:p-12 border border-border bg-gradient-card min-h-[300px] sm:min-h-[400px] relative overflow-hidden">
              {/* Background number */}
              <div className="absolute -right-4 sm:-right-8 -bottom-8 sm:-bottom-16 text-[100px] sm:text-[150px] md:text-[200px] font-display font-bold text-muted/20 select-none pointer-events-none">
                {(skillCategories.findIndex(c => c.id === activeCategory) + 1).toString().padStart(2, '0')}
              </div>
              
              <AnimatePresence mode="wait">
                {skillCategories.map((category) => (
                  activeCategory === category.id && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-foreground">
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            className="group p-3 sm:p-4 border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <span className="text-xs sm:text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
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
