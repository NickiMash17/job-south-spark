import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nene171408@gmail.com",
    href: "mailto:nene171408@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 63 152 6795",
    href: "tel:+27631526795",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nicolette-mashaba",
    href: "https://linkedin.com/in/nicolette-mashaba",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Polokwane, South Africa",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <ScrollReveal variant="fadeRight">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                  Get In Touch
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Let's Build
                <br />
                <span className="text-gradient">Something Great</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-lg text-muted-foreground mb-12 max-w-md">
                Ready to bring your project to life? I'm available for freelance work 
                and exciting collaborations. Let's create something amazing together.
              </p>
            </ScrollReveal>

            {/* Contact methods */}
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <div className="group">
                    {method.href ? (
                      <motion.a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 border border-border hover:border-primary bg-card hover:bg-primary/5 transition-all duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                          <method.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                            {method.label}
                          </p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {method.value}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 border border-border bg-card">
                        <div className="w-12 h-12 border border-accent/30 flex items-center justify-center">
                          <method.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                            {method.label}
                          </p>
                          <p className="text-foreground font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right column - CTA Card */}
          <ScrollReveal variant="fadeLeft" delay={0.3} className="flex items-center">
            <motion.div 
              className="w-full p-10 md:p-14 border border-primary/30 bg-gradient-card relative overflow-hidden"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-accent/30" />
              
              <div className="relative z-10">
                <p className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4">
                  Ready to Start?
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Next Project
                  <br />
                  <span className="text-muted-foreground">Starts Here</span>
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Whether you need a web app, mobile app, API, or AI solution, 
                  I'm here to help bring your vision to life with clean code and modern design.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="mailto:nene171408@gmail.com">
                      <Mail className="w-5 h-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="flex-1" asChild>
                    <a href="https://nicmash-porfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                      Portfolio
                    </a>
                  </Button>
                </div>

                {/* Social links */}
                <div className="flex gap-2 mt-8 pt-8 border-t border-border">
                  <motion.a
                    href="https://github.com/NickiMash17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/nicolette-mashaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
