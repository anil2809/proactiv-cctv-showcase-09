
import React from "react";
import { motion } from "framer-motion";

const cctvImages = [
  {
    src: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "CCTV camera in retail environment"
  },
  {
    src: "https://images.unsplash.com/photo-1563477710521-5ae0aa5085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Security monitoring room"
  },
  {
    src: "https://images.unsplash.com/photo-1588906455110-e9e0f5a69a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor surveillance camera"
  },
  {
    src: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "CCTV display screens"
  },
  {
    src: "https://images.unsplash.com/photo-1599038064230-17ece91deeef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Security camera installation"
  },
  {
    src: "https://images.unsplash.com/photo-1595078475395-4c11a7b6ec55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "CCTV monitoring display"
  }
];

const CCTVGallery: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white light:text-gray-900">
            Our CCTV Solutions in Action
          </h3>
          <p className="dark:text-white/70 light:text-gray-700">
            View our portfolio of professional CCTV installations and monitoring systems that keep properties safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cctvImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCTVGallery;
