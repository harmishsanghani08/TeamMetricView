import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  delay?: number;
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
      data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="mb-4 flex justify-center">
        <Avatar className="w-40 h-40">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-3xl font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-xl font-semibold mb-1" data-testid={`text-team-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {name}
      </h3>
      <p className="text-sm text-muted-foreground" data-testid={`text-team-role-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {role}
      </p>
    </motion.div>
  );
}
