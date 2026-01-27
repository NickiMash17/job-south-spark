import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const stats = [
  { value: "25%", label: "AI Accuracy Improvement", icon: TrendingUp },
  { value: "80%", label: "Test Coverage", icon: Award },
  { value: "10+", label: "Production Projects", icon: Briefcase },
  { value: "Azure", label: "Certified Developer", icon: GraduationCap },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <ScrollReveal variant="fadeRight" delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                  About Me
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Nicolette
                <br />
                <span className="text-gradient">Mashaba</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Software Engineer with hands-on experience in full-stack web development, 
                  mobile application development, cloud computing, and artificial intelligence.
                </p>
                <p>
                  Microsoft Certified Azure Developer with proven success building production-ready 
                  applications using React, Node.js, .NET Core, Flutter, and Python. 
                </p>
                <p>
                  Strong problem-solver with Agile development experience, technical training skills, 
                  and passion for creating scalable solutions.
                </p>
              </div>
            </ScrollReveal>

            {/* Quick links */}
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="outline" className="px-4 py-2 rounded-none font-mono text-xs border-primary/50 text-primary">
                  Technical Trainer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 rounded-none font-mono text-xs border-accent/50 text-accent">
                  AI Model Trainer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 rounded-none font-mono text-xs">
                  Software Engineer
                </Badge>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Stats grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.15}>
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div className="group p-8 bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <stat.icon className="w-6 h-6 text-primary mb-4 relative z-10" />
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 relative z-10">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono relative z-10">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
