import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            Get In Touch
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to bring your project to life? Reach out and let's discuss how I can help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:nene171408@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                nene171408@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Phone</h3>
              <a 
                href="tel:+27631526795"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +27 63 152 6795
              </a>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Connect with me
              </a>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Polokwane, South Africa
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="max-w-2xl mx-auto bg-hero border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-secondary-foreground/70 mb-8">
              Whether you need a web app, mobile app, or AI solution, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:nene171408@gmail.com">
                  Send an Email
                  <Mail className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://nicmash-porfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                  View Portfolio
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
