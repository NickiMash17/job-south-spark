import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 bg-card border-t border-border relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo & Copyright */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="font-display font-bold text-xl sm:text-2xl text-foreground inline-block mb-1 sm:mb-2">
              NM<span className="text-primary">.</span>
            </a>
            <p className="text-xs font-mono text-muted-foreground">
              © {currentYear} Nicolette Mashaba
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="flex items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#services" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </motion.div>

          {/* Social Links & Back to top */}
          <motion.div 
            className="flex items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-1">
              <motion.a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 border border-border hover:border-primary hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 border border-border hover:border-primary hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:nene171408@gmail.com"
                className="p-2.5 sm:p-3 border border-border hover:border-primary hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="w-px h-6 sm:h-8 bg-border" />

            <motion.button
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
