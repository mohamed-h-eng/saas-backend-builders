import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Scalable SaaS Backend Architecture",
    description:
      "A complete backend boilerplate featuring secure user authentication, Stripe subscription logic, email workflows, and rate-limited API endpoints.",
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    links: [
      { label: "View GitHub Repo", href: "#", icon: Github },
      { label: "Read Case Study", href: "#", icon: ExternalLink },
    ],
  },
  {
    title: "Custom API Integration",
    description:
      "Developed a secure, high-performance REST API for a client, reducing data retrieval times and implementing role-based access control.",
    tags: ["REST API", "RBAC", "Performance", "Security"],
    links: [
      { label: "View GitHub Repo", href: "#", icon: Github },
    ],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-3">Portfolio</h2>
          <p className="text-3xl md:text-4xl font-bold">Featured Work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col hover:glow-sm transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
