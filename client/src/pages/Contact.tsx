import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@digisolutions.com",
      link: "mailto:hello@digisolutions.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-contact-heading">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-intro">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6" data-testid="text-contact-info-heading">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4"
                    data-testid={`contact-info-${info.label.toLowerCase()}`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1" data-testid={`text-contact-label-${info.label.toLowerCase()}`}>
                        {info.label}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-contact-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground" data-testid={`text-contact-value-${info.label.toLowerCase()}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2" data-testid="text-business-hours-heading">
                  Business Hours
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-business-hours">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
