import { motion } from "framer-motion";
import { Code2, CreditCard, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "SaaS Backend Development",
    description: "Building the engine of your app from scratch — APIs, databases, and server logic designed to scale with your user base.",
  },
  {
    icon: CreditCard,
    title: "Payment & Auth Integration",
    description: "Handling the tricky parts like Stripe billing and JWT authentication securely, so you can focus on your product.",
  },
  {
    icon: Search,
    title: "Free API Audits",
    description: "A low-risk review of your current backend architecture to find bottlenecks, security gaps, and optimization opportunities.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-3">Services</h2>
          <p className="text-3xl md:text-4xl font-bold">How I Help</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
