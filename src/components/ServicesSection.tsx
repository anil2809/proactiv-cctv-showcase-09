
import React from "react";
import ServiceCard from "./ServiceCard";
import { Camera, Shield, Video, ShieldCheck, Globe } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive CCTV Solutions For Every Need
          </h3>
          <p className="text-white/70">
            We offer a full range of CCTV installation, maintenance, and monitoring services to keep your property secure around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Camera}
            title="Residential CCTV"
            description="Complete home security camera systems designed to protect your family and property."
            features={[
              "HD & 4K camera options",
              "Remote viewing via smartphone",
              "Smart motion detection",
              "Night vision capability",
            ]}
            popular
          />

          <ServiceCard
            icon={Shield}
            title="Commercial Security"
            description="Advanced security solutions for businesses of all sizes to protect assets and monitor activities."
            features={[
              "Multi-camera setups",
              "Staff monitoring options",
              "Integration with access control",
              "Video analytics",
            ]}
          />

          <ServiceCard
            icon={Video}
            title="CCTV Maintenance"
            description="Regular maintenance and support services to keep your security system operating at peak performance."
            features={[
              "Quarterly system checks",
              "Camera cleaning & adjustments",
              "Software updates",
              "Quick repair response",
            ]}
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Security Consulting"
            description="Expert security assessments and recommendations tailored to your specific needs and concerns."
            features={[
              "On-site security analysis",
              "Vulnerability identification",
              "Custom security planning",
              "Budget-friendly options",
            ]}
          />

          <ServiceCard
            icon={Globe}
            title="Remote Monitoring"
            description="24/7 professional monitoring services to keep an eye on your property when you can't."
            features={[
              "Live video monitoring",
              "Instant alert notifications",
              "Emergency response coordination",
              "Activity reporting",
            ]}
          />

          <ServiceCard
            icon={Camera}
            title="Specialized Systems"
            description="Custom CCTV solutions for unique requirements and challenging environments."
            features={[
              "Weather-resistant options",
              "Long-range surveillance",
              "Low-light environments",
              "License plate recognition",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
