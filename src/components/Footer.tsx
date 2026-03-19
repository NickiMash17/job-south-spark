import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 bg-card/50 backdrop-blur-sm border-t border-border relative">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col gap-6 items-center text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="font-display font-bold text-xl text-foreground inline-block mb-1">
              NM<span className="text-primary">.</span>
            </a>
            <p className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Nicolette Mashaba · Made with <Heart className="w-3 h-3 text-primary fill-primary" />
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="flex items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {["Services", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Links & Back to top */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-1">
              {[
                { icon: Github, href: "https://github.com/NickiMash17" },
                { icon: Linkedin, href: "https://linkedin.com/in/nicolette-mashaba" },
                { icon: Mail, href: "mailto:nene171408@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 border border-border hover:border-primary hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="w-px h-6 bg-border" />
            <motion.button
              onClick={scrollToTop}
              className="p-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
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
