import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 rounded-full text-secondary-foreground/80 text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <MapPin className="w-4 h-4" />
              <span>Polokwane, South Africa</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hi, I'm{" "}
              <span className="text-gradient">Nicolette Mashaba</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-4 font-display animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Full-Stack Developer & Microsoft Certified Azure Developer
            </p>

            <p className="text-base md:text-lg text-secondary-foreground/60 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Building production-ready web & mobile applications with React, Node.js, .NET Core, Flutter, and Python. Passionate about creating scalable, user-centric solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#services">
                  View Services
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full transition-colors"
              >
                <Github className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="mailto:nene171408@gmail.com"
                className="p-3 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="https://nicmash-porfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-md animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="p-6 bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">25%</p>
              <p className="text-sm text-secondary-foreground/70">AI Model Accuracy Improvement</p>
            </div>
            <div className="p-6 bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10">
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">80%</p>
              <p className="text-sm text-secondary-foreground/70">Test Coverage on Mobile Apps</p>
            </div>
            <div className="p-6 bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-secondary-foreground/70">Production Projects</p>
            </div>
            <div className="p-6 bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10">
              <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">Azure</p>
              <p className="text-sm text-secondary-foreground/70">Certified Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
