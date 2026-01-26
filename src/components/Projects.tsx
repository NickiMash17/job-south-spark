import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EmpowerAI",
    subtitle: "Digital Economic Twin Platform",
    description: "AI-powered platform for economic analysis and digital twin simulations. Built with modern full-stack technologies.",
    technologies: ["React", "Python", "AI/ML", "FastAPI"],
    github: "https://github.com/NickiMash17/EmpowerAI",
    year: "2024",
  },
  {
    title: "Cross-Platform Mobile App",
    subtitle: "Flutter Development",
    description: "Feature-rich mobile application for Android and iOS with 80% test coverage and seamless cross-platform functionality.",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
    year: "2025",
  },
  {
    title: "AI Model Training System",
    subtitle: "Outlier AI Project",
    description: "Developed annotation workflows that reduced engineering workload by 10 hours/week with 25% accuracy improvement.",
    technologies: ["Python", "NLP", "TensorFlow", "OpenAI"],
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            Portfolio
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world applications delivering measurable results
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-primary font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/NickiMash17" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
