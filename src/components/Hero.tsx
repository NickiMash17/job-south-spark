import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating geometric shapes - hidden on small mobile */}
      <motion.div 
        className="absolute top-20 right-[15%] w-16 h-16 md:w-32 md:h-32 border border-primary/20 rotate-45 hidden sm:block"
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-[10%] w-12 h-12 md:w-16 md:h-16 border border-primary/30 rotate-12 hidden sm:block"
        animate={{ y: [0, 15, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-40 left-[10%] w-16 h-16 md:w-24 md:h-24 border border-accent/20 -rotate-12 hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [-12, -18, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute top-1/3 left-[5%] w-2 h-2 bg-primary rounded-full animate-pulse-slow hidden sm:block" />
      <div className="absolute top-1/2 right-[20%] w-2 h-2 bg-accent rounded-full animate-pulse-slow delay-200 hidden sm:block" />
      
      {/* Large gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40">
        <div className="max-w-5xl">
          {/* Status badge */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Available for projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.9] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="block text-foreground">I BUILD</span>
            <span className="block text-gradient glow-text">DIGITAL</span>
            <span className="block text-foreground">EXPERIENCES</span>
          </motion.h1>

          {/* Description with asymmetric layout */}
          <motion.div 
            className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Full-Stack Developer & Azure Certified engineer crafting 
                production-ready applications with modern technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["React", "Flutter", ".NET", "AI/ML", "Azure"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#services">
                <Sparkles className="w-5 h-5" />
                View Services
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/Nicolette-Mashaba-CV.pdf" download="Nicolette-Mashaba-CV.pdf">
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            <Button variant="minimal" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                Let's Talk
              </a>
            </Button>
          </motion.div>

          {/* Social links & location */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex gap-1">
              {[
                { icon: Github, href: "https://github.com/NickiMash17", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/nicolette-mashaba", label: "LinkedIn" },
                { icon: Mail, href: "mailto:nene171408@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 border border-transparent hover:border-border hover:bg-muted transition-all group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border hidden md:block" />
            
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="font-mono">Polokwane, South Africa</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Side text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/50 [writing-mode:vertical-lr] rotate-180">
          Nicolette Mashaba — 2024
        </p>
      </div>
    </section>
  );
};

export default Hero;
