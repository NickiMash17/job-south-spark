import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-2xl text-foreground inline-block mb-2">
              NM<span className="text-primary">.</span>
            </a>
            <p className="text-xs font-mono text-muted-foreground">
              © {currentYear} Nicolette Mashaba
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a href="#services" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nene171408@gmail.com"
                className="p-3 border border-border hover:border-primary hover:text-primary transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="w-px h-8 bg-border" />

            <button
              onClick={scrollToTop}
              className="p-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
