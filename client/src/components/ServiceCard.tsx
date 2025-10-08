import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-card-border rounded-xl p-6 md:p-8 hover-elevate active-elevate-2 transition-all"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-service-desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </motion.div>
  );
}
