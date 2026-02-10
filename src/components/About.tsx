import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";
import profileImage from "@/assets/nicolette-profile.jpg";

const stats = [
  { value: "25%", label: "AI Accuracy Improvement", icon: TrendingUp },
  { value: "80%", label: "Test Coverage", icon: Award },
  { value: "10+", label: "Production Projects", icon: Briefcase },
  { value: "Azure", label: "Certified Developer", icon: GraduationCap },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-[0.03]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute h-px w-full bg-primary" style={{ top: `${(i + 1) * 12}%` }} />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Mobile profile image */}
        <ScrollReveal variant="scale" delay={0.1} className="lg:hidden mb-8 flex justify-center">
          <div className="relative">
            <motion.div
              className="absolute -inset-3 border border-primary/20"
              style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="w-40 h-52 sm:w-48 sm:h-60 overflow-hidden"
              style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
            >
              <img src={profileImage} alt="Nicolette Mashaba" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5 pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-8 items-center">
          {/* Left column - Text */}
          <div className="text-center lg:text-left">
            <ScrollReveal variant="fadeRight" delay={0}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-5 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                  About Me
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-8 leading-tight">
                Nicolette
                <br />
                <span className="text-gradient">Mashaba</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="space-y-3 sm:space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-lg">
                  Software Engineer with hands-on experience in full-stack web development,
                  mobile application development, cloud computing, and artificial intelligence.
                </p>
                <p className="text-xs sm:text-base">
                  Microsoft Certified Azure Developer with proven success building production-ready
                  applications using React, Node.js, .NET Core, Flutter, and Python.
                </p>
                <p className="text-xs sm:text-base">
                  Strong problem-solver with Agile development experience, technical training skills,
                  and passion for creating scalable solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5 sm:mt-8">
                <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-none font-mono text-[11px] sm:text-xs border-primary/50 text-primary">
                  Technical Trainer
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-none font-mono text-[11px] sm:text-xs border-accent/50 text-accent">
                  AI Model Trainer
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-none font-mono text-[11px] sm:text-xs">
                  Software Engineer
                </Badge>
              </div>
            </ScrollReveal>
          </div>

          {/* Center column - Desktop Profile Image */}
          <ScrollReveal variant="scale" delay={0.2} className="hidden lg:block">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 border border-primary/20"
                style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-56 h-72 xl:w-64 xl:h-80 overflow-hidden"
                style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={profileImage} alt="Nicolette Mashaba" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5 pointer-events-none" />
              </motion.div>
              <motion.div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/40" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-accent/40" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
              <motion.p className="absolute -right-10 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground/40 [writing-mode:vertical-lr]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}>
                Developer
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Right column - Stats grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="group p-4 sm:p-6 lg:p-8 bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary mb-2 sm:mb-4 relative z-10" />
                  <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 relative z-10">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-mono relative z-10 leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
