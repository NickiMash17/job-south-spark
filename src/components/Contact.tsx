import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ArrowUpRight } from "lucide-react";

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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Ready to bring your project to life? I'm available for freelance work 
              and exciting collaborations. Let's create something amazing together.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div key={method.label} className="group">
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 border border-border hover:border-primary bg-card hover:bg-primary/5 transition-all duration-300"
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
                    </a>
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
              ))}
            </div>
          </div>

          {/* Right column - CTA Card */}
          <div className="flex items-center">
            <div className="w-full p-10 md:p-14 border border-primary/30 bg-gradient-card relative overflow-hidden">
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
                  <a
                    href="https://github.com/NickiMash17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nicolette-mashaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
