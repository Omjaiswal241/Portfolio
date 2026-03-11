import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "GL Bajaj Institute of Technology and Management",
    year: "2023 – 2027",
    description: "Computer Science Engineering | Current CGPA: 7.68/10",
  },
  {
    degree: "Intermediate (10+2)",
    institution: "New Public College",
    year: "2019 - 2022",
    description: "12th Grade: 89.16% | 10th Grade: 91.16%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Education</span>
          </h2>
        </motion.div>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary font-display font-medium tracking-widest uppercase mb-1">{edu.year}</p>
                <h3 className="font-display font-semibold text-lg mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
