import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "David Mokoena",
    role: "CEO, TechVentures SA",
    quote: "Nicolette delivered an exceptional web application that exceeded our expectations. Her attention to detail and technical expertise in React and Azure made the entire process seamless.",
    rating: 5,
    accent: "primary" as const,
  },
  {
    id: 2,
    name: "Lerato Ndlovu",
    role: "Product Manager, InnovateCo",
    quote: "Working with Nicolette on our Flutter mobile app was a game-changer. She brought our vision to life with clean code, 80% test coverage, and delivered ahead of schedule.",
    rating: 5,
    accent: "accent" as const,
  },
  {
    id: 3,
    name: "James van der Berg",
    role: "CTO, DataFlow Analytics",
    quote: "Her AI integration work improved our model accuracy by 25%. Nicolette's deep understanding of NLP and prompt engineering brought real, measurable results to our platform.",
    rating: 5,
    accent: "primary" as const,
  },
  {
    id: 4,
    name: "Thandi Mabaso",
    role: "Founder, EduTech Solutions",
    quote: "Nicolette's technical training sessions transformed our junior team into confident developers. Her mentorship style is patient, thorough, and genuinely inspiring.",
    rating: 5,
    accent: "accent" as const,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border border-accent/10 rotate-45 translate-x-32 translate-y-32 hidden md:block" />
      <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-primary rounded-full hidden md:block" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <ScrollReveal variant="fadeRight">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                Testimonials
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What Clients
              <br />
              <span className="text-gradient">Say About Me</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-muted-foreground text-sm sm:text-lg">
              Real feedback from clients and collaborators I've had the privilege of working with.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.12}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                className="group relative h-full bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-default"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Top accent bar */}
                <motion.div
                  className={`h-0.5 w-full ${testimonial.accent === "accent" ? "bg-accent" : "bg-primary"}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-5 sm:p-8 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quote className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 ${testimonial.accent === "accent" ? "text-accent/30" : "text-primary/30"}`} />

                  {/* Quote text */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center font-display font-bold text-sm ${
                        testimonial.accent === "accent"
                          ? "bg-accent/10 text-accent border border-accent/30"
                          : "bg-primary/10 text-primary border border-primary/30"
                      }`}
                    >
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[11px] sm:text-xs font-mono text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
