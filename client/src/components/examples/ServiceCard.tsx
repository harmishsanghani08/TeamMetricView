import ServiceCard from "../ServiceCard";
import { Code } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        icon={Code}
        title="Website Development"
        description="Custom, responsive websites built with modern technologies to elevate your online presence."
      />
    </div>
  );
}
