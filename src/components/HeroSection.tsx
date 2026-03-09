import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Code2 } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/omjaiswal", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/omjaiswal", label: "LeetCode" },
  { icon: Twitter, href: "https://twitter.com/omjaiswal", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email", isInternal: true },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-6">
            Om <span className="text-gradient">Jaiswal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            A passionate developer crafting digital experiences with clean code and creative solutions.
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label, isInternal }) => (
              <a
                key={label}
                href={href}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                onClick={
                  isInternal
                    ? (e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
