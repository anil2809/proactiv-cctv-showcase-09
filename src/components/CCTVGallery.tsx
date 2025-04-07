
import React from "react";
import { motion } from "framer-motion";

const cctvImages = [
  {
    src: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "CCTV camera on wall"
  },
  {
    src: "https://images.pexels.com/photos/371949/pexels-photo-371949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Security camera on ceiling"
  },
  {
    src: "https://images.pexels.com/photos/2976639/pexels-photo-2976639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern surveillance camera"
  },
  {
    src: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "CCTV security system"
  },
  {
    src: "https://images.pexels.com/photos/2873417/pexels-photo-2873417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Indoor surveillance camera"
  },
  {
    src: "https://images.pexels.com/photos/2489171/pexels-photo-2489171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Building security camera"
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
