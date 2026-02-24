import { motion } from "framer-motion";

const techStack = [
  { name: "Node.js", icon: "⬢" },
  { name: "Express", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "RESTful APIs", icon: "🔗" },
];

const capabilities = [
  { name: "Stripe Integration", icon: "💳" },
  { name: "JWT Authentication", icon: "🔐" },
  { name: "RBAC", icon: "🛡️" },
  { name: "API Rate Limiting", icon: "⏱️" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStack = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-3">Tech Stack</h2>
          <p className="text-3xl md:text-4xl font-bold">Tools I Use Every Day</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:glow-sm transition-shadow"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="font-semibold text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">SaaS-Specific Skills</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.name}
              variants={itemVariants}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border"
            >
              <span className="text-xl">{cap.icon}</span>
              <span className="font-medium text-sm text-secondary-foreground">{cap.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
