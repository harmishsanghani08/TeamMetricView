import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Smartphone, Palette, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to elevate your online presence.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support and maintenance to keep your digital products running smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6"
            data-testid="text-hero-headline"
          >
            Building Your
            <span className="block text-primary mt-2">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            data-testid="text-hero-tagline"
          >
            Transform your vision into reality with cutting-edge technology solutions.
            We create digital experiences that drive growth and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" data-testid="button-cta-hero">
              <button className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all flex items-center gap-2">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services" data-testid="button-learn-more">
              <button className="px-8 py-3 bg-card border border-card-border text-card-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subheading">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
