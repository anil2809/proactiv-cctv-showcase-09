
import React from "react";
import ServiceCard from "./ServiceCard";
import WorldMap from "./WorldMap";
import { Camera, Shield, Video, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const servicesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      <div className="absolute inset-0 noise-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-sm font-medium text-primary mb-3 uppercase tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive CCTV Solutions For Every Need
          </motion.h3>
          <motion.p 
            className="text-white/70"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer a full range of CCTV installation, maintenance, and monitoring services to keep your property secure around the clock.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={servicesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={serviceCardVariants}>
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
          </motion.div>

          <motion.div variants={serviceCardVariants}>
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
          </motion.div>

          <motion.div variants={serviceCardVariants}>
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
          </motion.div>

          <motion.div variants={serviceCardVariants}>
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
          </motion.div>

          <motion.div variants={serviceCardVariants}>
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
          </motion.div>

          <motion.div variants={serviceCardVariants}>
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
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Global Remote Monitoring Solutions
            </h3>
            <p className="text-white/70 mb-6">
              Access your security system from anywhere in the world with our advanced remote monitoring technology.
              Our global network ensures you're always connected to your property, no matter where you are.
            </p>
          </div>
          
          <WorldMap />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
