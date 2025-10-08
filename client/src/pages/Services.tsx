import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Code, Smartphone, Palette, Wrench, Zap, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies like React, Next.js, and Node.js. We create fast, scalable, and SEO-optimized web solutions.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Beautiful interfaces with seamless performance.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. From wireframes to high-fidelity prototypes, we create engaging digital experiences.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your digital products remain secure, fast, and up-to-date.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with performance audits, code optimization, and infrastructure improvements.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security audits, implementation of best practices, and compliance with industry standards like GDPR and WCAG.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-services-page-heading">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-page-intro">
              Comprehensive digital solutions designed to help your business thrive
              in the modern digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4" data-testid="text-cta-heading">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
              Let's discuss how we can help bring your digital vision to life.
              Get in touch with us today for a free consultation.
            </p>
            <a href="/contact" data-testid="button-contact-cta">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
