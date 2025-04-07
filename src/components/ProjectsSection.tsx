
import React from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "High-Rise Office Building",
    description: "Complete security system with 64 cameras covering all entry points, parking areas, and common spaces.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Commercial", "IP Cameras", "Access Control"],
  },
  {
    title: "Luxury Residential Estate",
    description: "Integrated security solution with perimeter cameras, smart doorbells, and remote monitoring for a gated community.",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Residential", "Smart Home", "Perimeter Security"],
  },
  {
    title: "Retail Chain Stores",
    description: "Multi-location security deployment with centralized monitoring and analytics for inventory protection.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Retail", "Analytics", "Multi-Site"],
  },
  {
    title: "Manufacturing Facility",
    description: "Industrial-grade surveillance system covering production floors, storage areas, and loading docks.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Industrial", "Thermal Cameras", "24/7 Monitoring"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-black/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Recent Security Installations
          </h3>
          <p className="text-white/70">
            Take a look at some of our recent CCTV projects across various industries and settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-white/70 mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  className="text-xs border-white/10 hover:bg-primary hover:text-white"
                >
                  View Details
                </Button>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-primary rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/80 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
