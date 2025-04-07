
import React from "react";
import { motion } from "framer-motion";

const cctvImages = [
  {
    src: "/lovable-uploads/a2ac66ee-f26f-4733-a987-3140fa5bc9c8.png",
    alt: "CCTV camera mounted on ceiling"
  },
  {
    src: "/lovable-uploads/3213b3e2-090b-4cf4-8d8e-d8e6615194d4.png",
    alt: "Security camera on ceiling light"
  },
  {
    src: "/lovable-uploads/6d021fb1-9b79-4f21-83b8-715eadb93541.png",
    alt: "Multiple surveillance cameras on pole"
  },
  {
    src: "/lovable-uploads/ea9b7fdd-f7c4-4ed7-8f0d-3eccc010d8a5.png",
    alt: "Technician installing ceiling camera"
  },
  {
    src: "/lovable-uploads/f529e55c-a025-4d69-8a41-099b491c6e78.png",
    alt: "Technician installing wall camera"
  },
  {
    src: "/lovable-uploads/b7b984c4-36cb-4753-b9d3-0cee25438631.png",
    alt: "Dome camera installation"
  },
  {
    src: "/lovable-uploads/b76cfe16-2be1-40e5-afac-f60e6ba2dea7.png",
    alt: "Security cameras on pole"
  },
  {
    src: "/lovable-uploads/67769a75-bc5a-4c66-9c12-277231ebac9d.png",
    alt: "Security cameras on building exterior"
  },
  {
    src: "/lovable-uploads/8d4aa376-af20-4ab7-b64e-0001b3a62978.png",
    alt: "Modern CCTV cameras on pole"
  },
  {
    src: "/lovable-uploads/3980e8c1-9a7b-43a2-9be1-ddbfdbdce6c3.png",
    alt: "Ceiling mounted dome camera"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
