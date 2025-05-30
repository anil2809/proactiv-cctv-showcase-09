
import React from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  popular,
}: ServiceCardProps) => {
  return (
    <div
      className={`relative rounded-xl border ${
        popular ? "border-primary/50" : "dark:border-white/10 light:border-gray-200"
      } dark:bg-white/5 light:bg-white backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group`}
    >
      {popular && (
        <Badge
          className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white"
          variant="default"
        >
          Popular
        </Badge>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-xl font-bold dark:text-white light:text-gray-900">{title}</h3>
      <p className="mb-6 text-sm dark:text-white/70 light:text-gray-600">{description}</p>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            <span className="text-sm dark:text-white/70 light:text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/50 via-primary/0 to-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 blur-sm"></div>
    </div>
  );
};

export default ServiceCard;
