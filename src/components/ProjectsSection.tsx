import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cattle-Breed-Prediction-Model",
    description: "Developed an AI-based livestock breed classification system as part of the Smart India Hackathon (SIH) 2025 problem statement, capable of identifying 41 Indian cattle and buffalo breeds from images. The model was designed to handle variations in lighting conditions, backgrounds, and animal poses, achieving around 80–85% classification accuracy. Performance was further improved using transfer learning and optimized preprocessing, enabling fast and reliable real-time predictions.",
    tags: ["TensorFlow", "OpenCV", "CNN", "Transfer Learning", "Flask API", "React", "TypeScript"],
    github: "https://github.com/Omjaiswal241/Cattle-Breed-Prediction-Model",
    liveDemo: "https://cattle-breed-prediction-model-frontend.onrender.com",
  },
  {
    title: "CollabCanvas",
    description: "A real-time collaborative whiteboard application that allows multiple users to draw, create shapes, add text, and communicate through chat within shared rooms. Drawing tools such as the pencil and shape features were implemented from scratch to provide a smooth and responsive experience. All updates are synchronized instantly across connected users to enable seamless collaboration, while persistent canvas storage allows users to save and access their boards later.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/Omjaiswal241/CollabCanvas",
    liveDemo: "https://collabcanvas-shg2.onrender.com",
  },
  {
    title: "ConvoConnect",
    description: "A full-stack real-time chat application that enables users to communicate instantly with low-latency message delivery. The platform supports over 100 concurrent WebSocket connections and uses secure token-based authentication to protect user sessions. The system is optimized for fast message transmission with sub-200ms latency and features a responsive interface designed for smooth communication across both desktop and mobile devices.",
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Omjaiswal241/ConvoConnect",
    liveDemo: "https://convoconnect-frontend.onrender.com",
  },
  {
    title: "Vibe-Stream",
    description: "A lightweight browser-based music player that allows users to play and manage songs directly from the local library. The application provides basic playback controls such as play, pause, and track selection, with songs organized into playlists for better navigation. Designed as a static frontend project, it demonstrates interactive UI development and client-side media handling in a simple and responsive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Omjaiswal241/Vibe-Stream",
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">{project.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                >
                  <Github size={16} />
                  Github
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
