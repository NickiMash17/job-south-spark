import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-xl text-secondary-foreground">
              Nicolette<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-secondary-foreground/60 mt-2">
              © {currentYear} Nicolette Mashaba. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NickiMash17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 text-secondary-foreground/70 hover:text-secondary-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/nicolette-mashaba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5 text-secondary-foreground/70 hover:text-secondary-foreground" />
            </a>
            <a
              href="mailto:nene171408@gmail.com"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 text-secondary-foreground/70 hover:text-secondary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
