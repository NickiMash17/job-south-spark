import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute top-40 right-[10%] w-16 h-16 border border-primary/30 rotate-12 animate-float delay-200" />
      <div className="absolute bottom-40 left-[10%] w-24 h-24 border border-accent/20 -rotate-12 animate-float delay-300" />
      <div className="absolute top-1/3 left-[5%] w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-[20%] w-2 h-2 bg-accent rounded-full animate-pulse-slow delay-200" />
      
      {/* Large gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="max-w-5xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Available for projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.9] mb-8 animate-slide-up delay-100">
            <span className="block text-foreground">I BUILD</span>
            <span className="block text-gradient glow-text">DIGITAL</span>
            <span className="block text-foreground">EXPERIENCES</span>
          </h1>

          {/* Description with asymmetric layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up delay-200">
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Full-Stack Developer & Azure Certified engineer crafting 
                production-ready applications with modern technologies.
              </p>
            </div>
            <div className="flex items-end">
              <div className="flex flex-wrap gap-3">
                {["React", "Flutter", ".NET", "AI/ML", "Azure"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-slide-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href="#services">
                <Sparkles className="w-5 h-5" />
                View Services
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                Let's Talk
              </a>
            </Button>
          </div>

          {/* Social links & location */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 animate-slide-up delay-400">
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
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
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
