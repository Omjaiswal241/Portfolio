import { Linkedin, Twitter, Mail, Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Om Jaiswal. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Linkedin, href: "https://linkedin.com/in/omjaiswal", label: "LinkedIn" },
          { icon: Code2, href: "https://leetcode.com/omjaiswal", label: "LeetCode" },
          { icon: Twitter, href: "https://twitter.com/omjaiswal", label: "Twitter" },
          { icon: Mail, href: "mailto:om@example.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
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
