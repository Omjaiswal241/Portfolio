import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    link: "https://www.credly.com/badges/eb03b349-7d12-438f-961c-fdaf610bcf04/public_url", // Add your certificate link here
  },
  {
    title: "Java(Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/1210f7b2911f", // Add your certificate link here
  },
  {
    title: "Problem Solving(Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/bf7f8a71dfd9", // Add your certificate link here
  },
  {
    title: "Network Security Fundamentals",
    issuer: "Palo Alto Networks Cybersecurity Academy",
    link: "/palo-alto-certificate.pdf", // Add your certificate link here
  },
  {
    title: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/4b9f35d9-46a6-4e1e-b972-3c4b15ff60b4/public_url", // Add your certificate link here
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award size={20} className="text-primary" />
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
