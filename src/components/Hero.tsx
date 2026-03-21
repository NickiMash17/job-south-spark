import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const profileImage = "/NICOLETTE.jpeg";

type ParticleConfig = {
  id: number;
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
};

const Particle = ({ delay, duration, x, y, size, reducedMotion }: ParticleConfig & { reducedMotion: boolean }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={
      reducedMotion
        ? { opacity: 0.2 }
        : {
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }
    }
    transition={{
      duration,
      delay,
      repeat: reducedMotion ? 0 : Infinity,
      ease: "easeInOut",
    }}
  />
);

const createParticles = (): ParticleConfig[] =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 4 + (i % 3),
    x: `${(i * 11) % 100}%`,
    y: `${(i * 17) % 100}%`,
    size: 3 + (i % 3),
  }));

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const nextPositionRef = useRef({ x: 0, y: 0 });
  const particles = useMemo(createParticles, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const updateMousePosition = () => {
      setMousePosition(nextPositionRef.current);
      frameRef.current = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      nextPositionRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 12,
        y: (event.clientY / window.innerHeight - 0.5) * 12,
      };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateMousePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const motionOffset = prefersReducedMotion ? { x: 0, y: 0 } : mousePosition;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  background: [
                    "radial-gradient(ellipse at 20% 20%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
                    "radial-gradient(ellipse at 80% 80%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
                    "radial-gradient(ellipse at 50% 50%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
                    "radial-gradient(ellipse at 20% 20%, hsl(38 92% 55% / 0.15) 0%, transparent 50%)",
                  ],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} reducedMotion={prefersReducedMotion} />
        ))}
      </div>

      <motion.div
        className="absolute top-20 right-[15%] hidden h-24 w-24 rotate-45 border-2 border-primary/30 md:block"
        style={{ x: motionOffset.x * 0.4, y: motionOffset.y * 0.4 }}
        animate={prefersReducedMotion ? undefined : { y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] hidden h-20 w-20 -rotate-12 border border-accent/30 lg:block"
        style={{ x: motionOffset.x * -0.3, y: motionOffset.y * -0.3 }}
        animate={prefersReducedMotion ? undefined : { y: [0, -15, 0], rotate: [-12, -18, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:h-[800px] md:w-[800px]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                background: [
                  "radial-gradient(circle, hsl(38 92% 55% / 0.08) 0%, transparent 60%)",
                  "radial-gradient(circle, hsl(38 92% 55% / 0.12) 0%, transparent 70%)",
                  "radial-gradient(circle, hsl(38 92% 55% / 0.08) 0%, transparent 60%)",
                ],
                scale: [1, 1.1, 1],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-5 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-20 lg:pt-32">
        <motion.div
          className="mb-8 flex justify-center lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-3 opacity-40"
              style={{
                clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                background: "linear-gradient(135deg, hsl(38 92% 55% / 0.3), hsl(168 80% 45% / 0.2))",
              }}
              animate={prefersReducedMotion ? undefined : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="h-36 w-36 overflow-hidden border-2 border-primary/40 sm:h-44 sm:w-44"
              style={{ clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" }}
            >
              <img
                src={profileImage}
                alt="Nicolette Mashaba"
                className="h-full w-full object-cover object-top scale-110"
                fetchPriority="high"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-primary/10" />
            </div>
            <motion.div
              className="absolute -inset-5 rounded-full"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_hsl(38_92%_55%_/_0.6)]" />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-3xl flex-1 text-center lg:text-left">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-accent"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 5px hsl(168 80% 45% / 0.5)",
                          "0 0 15px hsl(168 80% 45% / 0.8)",
                          "0 0 5px hsl(168 80% 45% / 0.5)",
                        ],
                      }
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
                Available for projects
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 font-display text-[2.5rem] font-extrabold leading-[0.9] sm:mb-6 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.span className="block text-foreground" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                I BUILD
              </motion.span>
              <motion.span className="glow-text block text-gradient" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                DIGITAL
              </motion.span>
              <motion.span className="block text-foreground" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                EXPERIENCES
              </motion.span>
            </motion.h1>

            <motion.div
              className="mb-6 flex flex-col gap-4 sm:mb-8 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
                Full-Stack Developer and Azure Certified engineer crafting production-ready applications with modern technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {["React", "Flutter", ".NET", "AI/ML", "Azure"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="cursor-default border border-border px-2.5 py-1 font-mono text-[11px] transition-all hover:border-primary hover:text-primary sm:px-3 sm:py-1.5 sm:text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mb-8 flex flex-col flex-wrap justify-center gap-3 sm:mb-10 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="#services">
                  <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  View Services
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="/Nicolette-Mashaba-CV.pdf" download="Nicolette-Mashaba-CV.pdf">
                  <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                  Download CV
                </a>
              </Button>
              <Button variant="minimal" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
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
                    className="group border border-transparent p-3 transition-all hover:border-border hover:bg-muted"
                    aria-label={label}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>

              <div className="h-px w-12 bg-border sm:h-6 sm:w-px" />

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs sm:text-sm">Polokwane, South Africa</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden flex-shrink-0 items-center justify-center lg:flex"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative" style={{ perspective: "1000px" }}>
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/20"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_15px_hsl(38_92%_55%_/_0.6)]" />
              </motion.div>
              <motion.div
                className="absolute -inset-14 rounded-full border border-accent/10"
                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_hsl(168_80%_45%_/_0.6)]" />
              </motion.div>

              <motion.div
                className="absolute -inset-6 opacity-40"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  background: "linear-gradient(135deg, hsl(38 92% 55% / 0.3), hsl(168 80% 45% / 0.2))",
                }}
                animate={prefersReducedMotion ? undefined : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative h-72 w-72 overflow-hidden border-2 border-primary/40 xl:h-80 xl:w-80"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  x: motionOffset.x * -0.15,
                  y: motionOffset.y * -0.15,
                }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Nicolette Mashaba - Full-Stack Developer"
                  className="h-full w-full object-cover object-top scale-110"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10" />
              </motion.div>

              <motion.div
                className="absolute -top-3 -right-3 h-8 w-8 border-t-2 border-r-2 border-primary"
                animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-primary"
                animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <motion.div
                className="absolute -right-12 top-1/3 border border-border bg-card/80 px-3 py-1.5 font-mono text-xs text-primary backdrop-blur-md"
                animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Azure Certified
              </motion.div>

              <motion.div
                className="absolute -left-10 bottom-1/4 grid grid-cols-3 gap-1.5"
                animate={prefersReducedMotion ? undefined : { opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 right-8 hidden -translate-y-1/2 xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="rotate-180 text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/50 [writing-mode:vertical-lr]">
          Nicolette Mashaba 2026
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
