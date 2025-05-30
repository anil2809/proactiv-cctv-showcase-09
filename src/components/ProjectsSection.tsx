
import React from "react";
import FeaturesSectionWithHoverEffects from "@/components/ui/feature-section-with-hover-effects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-black/30 dark:bg-black/30 light:bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Our Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white light:text-gray-900">
            State-of-the-Art Security Solutions
          </h3>
          <p className="dark:text-white/70 light:text-gray-700 mb-8">
            Discover our comprehensive range of security features designed to protect what matters most.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 light:bg-white/90 light:border-gray-200">
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
