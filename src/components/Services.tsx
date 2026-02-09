import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe, Smartphone, Cloud, Brain, Database, Users } from "lucide-react";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications built with React, Next.js, Node.js, and .NET Core. From MVPs to enterprise solutions.",
    technologies: ["React", "Next.js", "Node.js", ".NET Core", "TypeScript"],
    priceZAR: "R3,500",
    priceUSD: "$190",
    accent: "primary",
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and React Native. iOS and Android from a single codebase with native performance.",
    technologies: ["Flutter", "React Native", "Dart", "Firebase"],
    priceZAR: "R5,000",
    priceUSD: "$270",
    accent: "accent",
  },
  {
    id: "03",
    icon: Cloud,
    title: "Cloud Solutions & Azure",
    description: "Cloud architecture, deployment, and DevOps. Azure App Service, Functions, CI/CD pipelines, and infrastructure as code.",
    technologies: ["Azure", "Docker", "Terraform", "CI/CD"],
    priceZAR: "R2,500",
    priceUSD: "$135",
    accent: "primary",
  },
  {
    id: "04",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "AI integration, prompt engineering, and NLP solutions. OpenAI API integration and custom model optimization.",
    technologies: ["OpenAI", "TensorFlow", "NLP", "Python"],
    priceZAR: "R4,000",
    priceUSD: "$215",
    accent: "accent",
  },
  {
    id: "05",
    icon: Database,
    title: "API Development",
    description: "RESTful and GraphQL APIs with robust authentication, comprehensive documentation, and scalable architecture.",
    technologies: ["REST", "GraphQL", "PostgreSQL", "MongoDB"],
    priceZAR: "R2,000",
    priceUSD: "$110",
    accent: "primary",
  },
  {
    id: "06",
    icon: Users,
    title: "Technical Training",
    description: "One-on-one or group training in web development, mobile apps, and modern programming practices.",
    technologies: ["Mentorship", "Code Review", "Best Practices"],
    priceZAR: "R800/hr",
    priceUSD: "$45/hr",
    accent: "accent",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      {/* Large decorative number */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[300px] font-display font-bold text-muted/5 select-none pointer-events-none hidden xl:block">
        06
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <ScrollReveal variant="fadeRight">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                  Services
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                What I Can
                <br />
                <span className="text-gradient">Build For You</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeLeft" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md md:text-right">
              From concept to deployment, I deliver high-quality, scalable solutions.
              All prices are starting rates and negotiable based on project scope.
            </p>
          </ScrollReveal>
        </div>

        {/* Services - Bento grid layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <motion.a
                href="#contact"
                className="group block relative bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden h-full"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top accent bar */}
                <motion.div
                  className={`h-1 w-full ${service.accent === "accent" ? "bg-accent" : "bg-primary"}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'}`} />

                <div className="relative z-10 p-5 sm:p-6 lg:p-8 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-3 border ${service.accent === "accent" ? "border-accent/30 bg-accent/10" : "border-primary/30 bg-primary/10"} transition-all duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className={`w-5 h-5 ${service.accent === "accent" ? "text-accent" : "text-primary"}`} />
                    </motion.div>
                    <span className="text-xs font-mono text-muted-foreground">{service.id}</span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-muted-foreground/70 px-2 py-0.5 border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Price + Arrow */}
                  <div className="flex items-end justify-between pt-4 border-t border-border/50">
                    <div>
                      <p className="font-display font-bold text-base sm:text-lg text-foreground">
                        From {service.priceZAR}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        ≈ {service.priceUSD}
                      </p>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${hoveredId === service.id ? 'text-primary translate-x-1 -translate-y-1' : 'text-muted-foreground'}`} />
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.3} className="mt-10 sm:mt-16 text-center">
          <p className="text-muted-foreground mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
            Need something custom? Let's discuss your requirements.
          </p>
          <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#contact">
              Get a Custom Quote
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
