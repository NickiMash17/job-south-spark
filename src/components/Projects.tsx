import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "EmpowerAI",
    subtitle: "Digital Economic Twin Platform",
    description: "AI-powered platform for economic analysis and digital twin simulations. Built with modern full-stack technologies for real-world impact.",
    technologies: ["React", "Python", "AI/ML", "FastAPI"],
    github: "https://github.com/NickiMash17/EmpowerAI",
    year: "2024",
    featured: true,
    gradient: "from-primary/10 via-transparent to-accent/5",
  },
  {
    id: "02",
    title: "Cross-Platform Mobile App",
    subtitle: "Flutter Development",
    description: "Feature-rich mobile application for Android and iOS with 80% test coverage and seamless cross-platform functionality.",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
    year: "2025",
    featured: false,
    gradient: "from-accent/10 via-transparent to-primary/5",
  },
  {
    id: "03",
    title: "AI Model Training System",
    subtitle: "Outlier AI Project",
    description: "Developed annotation workflows that reduced engineering workload by 10 hours/week with 25% accuracy improvement.",
    technologies: ["Python", "NLP", "TensorFlow", "OpenAI"],
    year: "2024",
    featured: false,
    gradient: "from-primary/10 via-transparent to-accent/5",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <ScrollReveal variant="fadeRight">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                  Portfolio
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Featured
                <br />
                <span className="text-gradient">Projects</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeLeft" delay={0.2}>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="https://github.com/NickiMash17" target="_blank" rel="noopener noreferrer">
                View All on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>

        {/* Featured project - large card */}
        {projects.filter(p => p.featured).map((project) => (
          <ScrollReveal key={project.id} variant="fadeUp" delay={0.1} className="mb-6">
            <motion.div
              className="group relative border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10 grid lg:grid-cols-[1fr_auto] items-center">
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">Featured Project</span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-accent mb-2">{project.subtitle}</p>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button variant="heroOutline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    <span className="text-xs font-mono text-muted-foreground border border-border px-3 py-1.5">{project.year}</span>
                  </div>
                </div>

                {/* Right side decorative */}
                <div className="hidden lg:flex items-center justify-center p-12 border-l border-border">
                  <motion.div
                    className="relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-32 h-32 border border-primary/30 flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                      <ArrowUpRight className="w-8 h-8 text-primary group-hover:scale-125 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Other projects - side by side */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.15}>
          {projects.filter(p => !p.featured).map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                className="group relative border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top colored bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-5 sm:p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-5xl font-display font-bold text-muted/20">
                      {project.id}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-accent mb-1 sm:mb-2">{project.subtitle}</p>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-mono border border-border text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
