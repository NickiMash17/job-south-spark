import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const profileImage = "/NICOLETTE.jpeg";

const stats = [
  { value: "25%", label: "AI Accuracy Improvement", icon: TrendingUp },
  { value: "80%", label: "Test Coverage", icon: Award },
  { value: "10+", label: "Production Projects", icon: Briefcase },
  { value: "Azure", label: "Certified Developer", icon: GraduationCap },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.03]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute h-px w-full bg-primary" style={{ top: `${(i + 1) * 12}%` }} />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <ScrollReveal variant="scale" delay={0.1} className="mb-8 flex justify-center lg:hidden">
          <div className="relative">
            <motion.div
              className="absolute -inset-3 border border-primary/20"
              style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="h-52 w-40 overflow-hidden sm:h-60 sm:w-48"
              style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
            >
              <img
                src={profileImage}
                alt="Nicolette Mashaba"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <ScrollReveal variant="fadeRight" delay={0}>
              <div className="mb-5 flex items-center justify-center gap-4 sm:mb-6 lg:justify-start">
                <div className="h-px w-8 bg-primary sm:w-12" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary sm:tracking-[0.3em]">
                  About Me
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="mb-5 font-display text-3xl font-bold leading-tight sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Nicolette
                <br />
                <span className="text-gradient">Mashaba</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="space-y-3 leading-relaxed text-muted-foreground sm:space-y-5">
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
              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-8 lg:justify-start">
                <Badge variant="outline" className="rounded-none border-primary/50 px-3 py-1.5 font-mono text-[11px] text-primary sm:px-4 sm:py-2 sm:text-xs">
                  Technical Trainer
                </Badge>
                <Badge variant="outline" className="rounded-none border-accent/50 px-3 py-1.5 font-mono text-[11px] text-accent sm:px-4 sm:py-2 sm:text-xs">
                  AI Model Trainer
                </Badge>
                <Badge variant="outline" className="rounded-none px-3 py-1.5 font-mono text-[11px] sm:px-4 sm:py-2 sm:text-xs">
                  Software Engineer
                </Badge>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale" delay={0.2} className="hidden lg:block">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 border border-primary/20"
                style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative h-72 w-56 overflow-hidden xl:h-80 xl:w-64"
                style={{ clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)" }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Nicolette Mashaba"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5" />
              </motion.div>
              <motion.div className="absolute -top-6 -right-6 h-12 w-12 border-t-2 border-r-2 border-primary/40" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.div className="absolute -bottom-6 -left-6 h-12 w-12 border-b-2 border-l-2 border-accent/40" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
              <motion.p className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-180 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground/40 [writing-mode:vertical-lr]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}>
                Developer
              </motion.p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="group p-4 sm:p-6 lg:p-8 bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <stat.icon className="relative z-10 mb-2 h-4 w-4 text-primary sm:mb-4 sm:h-6 sm:w-6" />
                  <p className="relative z-10 mb-1 font-display text-xl font-bold text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="relative z-10 text-[10px] font-mono leading-tight text-muted-foreground sm:text-xs">
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
