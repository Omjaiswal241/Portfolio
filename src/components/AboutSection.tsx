import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Om Jaiswal, a developer with a passion for building elegant, performant, and user-friendly applications. I enjoy turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                Whether it's front-end interfaces or back-end systems, I love the entire process of bringing ideas to life through code. I'm constantly learning and exploring new technologies.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Name", value: "Om Jaiswal" },
                { label: "Location", value: "India" },
                { label: "Interests", value: "Coding, Problem Solving, Open Source" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest text-primary font-display font-medium mb-1">{label}</p>
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
