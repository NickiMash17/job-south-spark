import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card py-8 sm:py-12">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="mb-1 inline-block font-display text-xl font-bold text-foreground">
              NM<span className="text-primary">.</span>
            </a>
            <p className="text-[11px] font-mono text-muted-foreground">
              Copyright {currentYear} Nicolette Mashaba
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {["Services", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-mono text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </motion.div>

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
                  className="border border-border p-2.5 transition-all hover:border-primary hover:text-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <div className="h-6 w-px bg-border" />
            <motion.button
              onClick={scrollToTop}
              className="border border-primary p-2.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
