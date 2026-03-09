import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built with modern technologies for seamless user experiences.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Beta",
    description: "An innovative tool designed to solve real-world problems with clean architecture.",
    tags: ["TypeScript", "Python", "AWS"],
    link: "#",
  },
  {
    title: "Project Gamma",
    description: "A responsive and performant application showcasing creative UI/UX design principles.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-xl border border-border bg-background p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
