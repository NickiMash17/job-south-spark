import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
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
  },
  {
    id: "02",
    title: "Cross-Platform Mobile App",
    subtitle: "Flutter Development",
    description: "Feature-rich mobile application for Android and iOS with 80% test coverage and seamless cross-platform functionality.",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
    year: "2025",
    featured: false,
  },
  {
    id: "03",
    title: "AI Model Training System",
    subtitle: "Outlier AI Project",
    description: "Developed annotation workflows that reduced engineering workload by 10 hours/week with 25% accuracy improvement.",
    technologies: ["Python", "NLP", "TensorFlow", "OpenAI"],
    year: "2024",
    featured: false,
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

        {/* Projects grid */}
        <StaggerContainer className="grid gap-4 sm:gap-6" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                className={`group relative border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden ${
                  project.featured ? 'lg:grid lg:grid-cols-2' : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-5 sm:p-8 md:p-10 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-muted/30">
                        {project.id}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1">
                        {project.year}
                      </span>
                    </div>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs sm:text-sm font-mono text-primary mb-1 sm:mb-2">{project.subtitle}</p>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-mono border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured project extra section */}
                {project.featured && (
                  <div className="hidden lg:flex items-center justify-center p-8 md:p-10 border-l border-border relative">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 border-2 border-primary/30 flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-muted-foreground">View Project</p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
