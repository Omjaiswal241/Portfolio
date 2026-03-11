import { Linkedin, Twitter, Mail, Code2, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Om Jaiswal. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/omjaiswal241/", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/Omjaiswal241", label: "GitHub" },
          { icon: Code2, href: "https://leetcode.com/omjaiswal241", label: "LeetCode" },
          { icon: Twitter, href: "https://x.com/omjaiswal241", label: "Twitter" },
          { icon: Mail, href: "mailto:jaiswalom221@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
