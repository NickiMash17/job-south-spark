import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from "@/assets/nicolette-profile.jpg";

// Particle component for floating effect
const Particle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Generate random particles
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 3,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
}));

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 20%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 80%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 20%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>
      
      {/* 3D Floating geometric shapes - hidden on mobile */}
      <motion.div 
        className="absolute top-20 right-[15%] w-24 h-24 border-2 border-primary/30 rotate-45 hidden md:block"
        style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-[10%] w-20 h-20 border border-accent/30 -rotate-12 hidden lg:block"
        style={{ x: mousePosition.x * -0.4, y: mousePosition.y * -0.4 }}
        animate={{ y: [0, -15, 0], rotate: [-12, -18, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Large gradient orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full blur-3xl pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle, hsl(38 92% 55% / 0.08) 0%, transparent 60%)",
            "radial-gradient(circle, hsl(38 92% 55% / 0.12) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(38 92% 55% / 0.08) 0%, transparent 60%)",
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-32">
        {/* Mobile profile image - shown above content on small screens */}
        <motion.div
          className="flex justify-center mb-8 lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Hexagonal glow */}
            <motion.div
              className="absolute -inset-3 opacity-40"
              style={{
                clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                background: "linear-gradient(135deg, hsl(38 92% 55% / 0.3), hsl(168 80% 45% / 0.2))",
              }}
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="w-36 h-36 sm:w-44 sm:h-44 overflow-hidden border-2 border-primary/40"
              style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}
            >
              <img
                src={profileImage}
                alt="Nicolette Mashaba"
                className="w-full h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-primary/10 pointer-events-none" />
            </div>
            {/* Orbital dot */}
            <motion.div
              className="absolute -inset-5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(38_92%_55%_/_0.6)]" />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            {/* Status badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mb-5 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.span 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 5px hsl(168 80% 45% / 0.5)",
                    "0 0 15px hsl(168 80% 45% / 0.8)",
                    "0 0 5px hsl(168 80% 45% / 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Available for projects
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="font-display text-[2.5rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.span 
                className="block text-foreground"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I BUILD
              </motion.span>
              <motion.span 
                className="block text-gradient glow-text"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                DIGITAL
              </motion.span>
              <motion.span 
                className="block text-foreground"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                EXPERIENCES
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Full-Stack Developer & Azure Certified engineer crafting 
                production-ready applications with modern technologies.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {["React", "Flutter", ".NET", "AI/ML", "Azure"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto group" asChild>
                <a href="#services">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Services
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group" asChild>
                <a href="/Nicolette-Mashaba-CV.pdf" download="Nicolette-Mashaba-CV.pdf">
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
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
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex gap-1">
                {[
                  { icon: Github, href: "https://github.com/NickiMash17", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/nicolette-mashaba", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:nene171408@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-3 border border-transparent hover:border-border hover:bg-muted transition-all group"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
              
              <div className="h-px w-12 sm:h-6 sm:w-px bg-border" />
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs sm:text-sm">Polokwane, South Africa</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Desktop Profile image */}
          <motion.div
            className="relative flex-shrink-0 hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              {/* Animated orbital rings */}
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_hsl(38_92%_55%_/_0.6)]" />
              </motion.div>
              <motion.div
                className="absolute -inset-14 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_hsl(168_80%_45%_/_0.6)]" />
              </motion.div>

              {/* Hexagonal glow backdrop */}
              <motion.div
                className="absolute -inset-6 opacity-40"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  background: "linear-gradient(135deg, hsl(38 92% 55% / 0.3), hsl(168 80% 45% / 0.2))",
                }}
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Profile image with hexagonal shape */}
              <motion.div
                className="relative w-72 h-72 xl:w-80 xl:h-80 overflow-hidden border-2 border-primary/40"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  x: mousePosition.x * -0.2,
                  y: mousePosition.y * -0.2,
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Nicolette Mashaba - Full-Stack Developer"
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10 pointer-events-none" />
              </motion.div>

              {/* Corner accents */}
              <motion.div
                className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              {/* Floating tech badge */}
              <motion.div
                className="absolute -right-12 top-1/3 px-3 py-1.5 bg-card/80 backdrop-blur-md border border-border text-xs font-mono text-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Azure Certified ✦
              </motion.div>

              {/* Floating dot grid */}
              <motion.div
                className="absolute -left-10 bottom-1/4 grid grid-cols-3 gap-1.5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Side text */}
      <motion.div 
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/50 [writing-mode:vertical-lr] rotate-180">
          Nicolette Mashaba — 2026
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
