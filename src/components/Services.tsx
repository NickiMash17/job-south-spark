import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Database, 
  Code2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications built with React, Next.js, Node.js, and .NET Core. From MVPs to enterprise solutions.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", ".NET Core"],
    priceZAR: "From R3,500",
    priceUSD: "From $190",
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and React Native. iOS and Android from a single codebase.",
    technologies: ["Flutter", "React Native", "Dart", "Firebase"],
    priceZAR: "From R5,000",
    priceUSD: "From $270",
    popular: false,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Azure",
    description: "Cloud architecture, deployment, and DevOps. Azure App Service, Functions, CI/CD pipelines, and infrastructure as code.",
    technologies: ["Azure", "Docker", "Terraform", "CI/CD"],
    priceZAR: "From R2,500",
    priceUSD: "From $135",
    popular: false,
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "AI integration, prompt engineering, and NLP solutions. OpenAI API integration and custom model training.",
    technologies: ["OpenAI", "TensorFlow", "NLP", "Python"],
    priceZAR: "From R4,000",
    priceUSD: "From $215",
    popular: false,
  },
  {
    icon: Database,
    title: "API Development",
    description: "RESTful and GraphQL APIs with robust authentication, documentation, and scalable architecture.",
    technologies: ["REST", "GraphQL", "PostgreSQL", "MongoDB"],
    priceZAR: "From R2,000",
    priceUSD: "From $110",
    popular: false,
  },
  {
    icon: Code2,
    title: "Technical Training",
    description: "One-on-one or group training in web development, mobile apps, and modern programming practices.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Git"],
    priceZAR: "From R800/hr",
    priceUSD: "From $45/hr",
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            Services
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Can <span className="text-gradient">Build For You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, I deliver high-quality, scalable solutions tailored to your needs. 
            All prices are negotiable based on project scope.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                service.popular ? "border-primary shadow-glow" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-display font-semibold text-foreground">
                        {service.priceZAR}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {service.priceUSD}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <a href="#contact">
                        Inquire
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your project requirements.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Get a Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
