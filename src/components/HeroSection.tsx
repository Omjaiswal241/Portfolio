import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Code2, Github } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/omjaiswal241/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Omjaiswal241", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com/omjaiswal241", label: "LeetCode" },
  { icon: Twitter, href: "https://x.com/omjaiswal241", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email", isInternal: true },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              Exploring new technologies and continuously improving my software development skills. Passionate about building solutions for real-world problems and turning ideas into practical, scalable applications.
            </p>

            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label, isInternal }) => (
                <a
                  key={label}
                  href={href}
                  target={isInternal ? undefined : "_blank"}
                  rel={isInternal ? undefined : "noopener noreferrer"}
                  onClick={isInternal ? (e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  } : undefined}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Om Jaiswal"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
