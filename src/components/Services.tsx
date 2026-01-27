import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe, Smartphone, Cloud, Brain, Database, Users } from "lucide-react";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const services = [
  {
    id: "01",
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications built with React, Next.js, Node.js, and .NET Core. From MVPs to enterprise solutions.",
    technologies: ["React", "Next.js", "Node.js", ".NET Core", "TypeScript"],
    priceZAR: "R3,500",
    priceUSD: "$190",
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and React Native. iOS and Android from a single codebase with native performance.",
    technologies: ["Flutter", "React Native", "Dart", "Firebase"],
    priceZAR: "R5,000",
    priceUSD: "$270",
  },
  {
    id: "03",
    icon: Cloud,
    title: "Cloud Solutions & Azure",
    description: "Cloud architecture, deployment, and DevOps. Azure App Service, Functions, CI/CD pipelines, and infrastructure as code.",
    technologies: ["Azure", "Docker", "Terraform", "CI/CD"],
    priceZAR: "R2,500",
    priceUSD: "$135",
  },
  {
    id: "04",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "AI integration, prompt engineering, and NLP solutions. OpenAI API integration and custom model optimization.",
    technologies: ["OpenAI", "TensorFlow", "NLP", "Python"],
    priceZAR: "R4,000",
    priceUSD: "$215",
  },
  {
    id: "05",
    icon: Database,
    title: "API Development",
    description: "RESTful and GraphQL APIs with robust authentication, comprehensive documentation, and scalable architecture.",
    technologies: ["REST", "GraphQL", "PostgreSQL", "MongoDB"],
    priceZAR: "R2,000",
    priceUSD: "$110",
  },
  {
    id: "06",
    icon: Users,
    title: "Technical Training",
    description: "One-on-one or group training in web development, mobile apps, and modern programming practices.",
    technologies: ["Mentorship", "Code Review", "Best Practices"],
    priceZAR: "R800/hr",
    priceUSD: "$45/hr",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-secondary/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <ScrollReveal variant="fadeRight">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                  Services
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                What I Can
                <br />
                <span className="text-gradient">Build For You</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeLeft" delay={0.2}>
            <p className="text-muted-foreground max-w-md md:text-right">
              From concept to deployment, I deliver high-quality, scalable solutions. 
              All prices are starting rates and negotiable based on project scope.
            </p>
          </ScrollReveal>
        </div>

        {/* Services list */}
        <StaggerContainer className="space-y-2" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div
                className="group relative"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href="#contact"
                  className="block p-6 md:p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4 md:w-24">
                      <span className="text-sm font-mono text-muted-foreground">{service.id}</span>
                      <service.icon className={`w-6 h-6 transition-colors duration-300 ${hoveredId === service.id ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <h3 className={`font-display text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${hoveredId === service.id ? 'text-primary' : 'text-foreground'}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-1 max-w-2xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Technologies - hidden on mobile */}
                    <div className="hidden lg:flex flex-wrap gap-2 max-w-xs">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs font-mono text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="md:text-right md:min-w-[140px]">
                      <p className="font-display font-bold text-lg text-foreground">
                        From {service.priceZAR}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        ≈ {service.priceUSD}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${hoveredId === service.id ? 'text-primary translate-x-1 -translate-y-1' : 'text-muted-foreground'}`} />
                  </div>
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 font-mono text-sm">
            Need something custom? Let's discuss your requirements.
          </p>
          <Button variant="hero" size="lg" asChild>
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
