import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiC,
  SiReact, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss, 
  SiTailwindcss,
  SiNodedotjs, 
  SiExpress, 
  SiSocketdotio,
  SiPostgresql, 
  SiMongodb, 
  SiPrisma,
  SiMysql,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  BrainCircuit,
  Boxes,
  Code2,
  Database,
  DatabaseZap,
  Link2,
  Workflow,
} from "lucide-react";

interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "WebSockets", icon: SiSocketdotio, color: "#010101" },
      { name: "Redis", icon: Database, color: "#DC382D" },
      { name: "Qdrant DB", icon: DatabaseZap, color: "#FF6B6B" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "AI / GenAI",
    skills: [
      { name: "RAG", icon: BrainCircuit, color: "#7C3AED" },
      { name: "MCP", icon: Boxes, color: "#0F766E" },
      { name: "LLM APIs", icon: Code2, color: "#0EA5E9" },
      { name: "LangChain", icon: Link2, color: "#F59E0B" },
      { name: "Vector Embeddings", icon: Workflow, color: "#8B5CF6" },
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", icon: SiGithub, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Web Scraping", icon: SiPython, color: "#3776AB" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>
        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <h3 className="font-display font-semibold text-primary text-lg uppercase tracking-widest mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 text-base px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
