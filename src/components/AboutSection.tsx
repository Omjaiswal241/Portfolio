import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding pt-10 md:pt-14 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
              Computer Science Engineering student passionate about software engineering, full-stack development, and AI applications. Experienced in building scalable systems using Java, React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and Redis. Skilled in Docker, CI/CD, distributed systems, and real-time applications, with a strong foundation in Data Structures & Algorithms and problem-solving.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-orange-500/10 border border-amber-200 dark:border-orange-500/20 rounded-xl p-6 md:p-8">
              <div className="space-y-8">
                {[
                  { label: "Location", value: "Lucknow,India" },
                  { label: "Education", value: "B.Tech CSE" },
                  { label: "Interests", value: "Problem Solving , Full-Stack Development , Backend Systems , AI Applications , Cloud & DevOps" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-widest text-primary font-display font-medium mb-1">{label}</p>
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
