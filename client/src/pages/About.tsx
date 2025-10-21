import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const teamMembers = [
    { name: "Harmish Sanghani", role: "CEO & Founder" },
    // { name: "Michael Chen", role: "CTO" },
    // { name: "Emily Rodriguez", role: "Lead Designer" },
    // { name: "David Kim", role: "Senior Developer" },
    // { name: "Jessica Lee", role: "Product Manager" },
    { name: "Ashish Sanghani", role: "Marketing Director" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Helping businesses thrive in the digital age with smart, innovative technology solutions.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading digital solutions provider, recognized for excellence, innovation, and client success.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Excellence, Innovation, Integrity, Collaboration, and Customer-Centricity guide everything we do.",
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-about-heading">
              About TechNova
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-intro">
            We are a team of digital innovators turning ideas into powerful technology solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-card-border rounded-xl p-8 text-center"
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-value-title-${value.title.toLowerCase()}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-value-desc-${value.title.toLowerCase()}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4" data-testid="text-team-heading">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-subheading">
              The creative minds making innovation happen every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
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
