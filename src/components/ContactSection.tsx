
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PulseBeams from "@/components/ui/pulse-beams";
import { motion, AnimatePresence } from "framer-motion";
import { WorldMapDemo } from "@/components/WorldMapDemo";

const ContactSection = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const toggleContact = () => {
    setIsContactVisible(!isContactVisible);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white light:text-gray-900">
            Get In Touch With Us
          </h3>
          <p className="dark:text-white/70 light:text-gray-700 mb-10">
            Ready to secure your property with professional CCTV solutions? Reach out to us for a free consultation and quote.
          </p>

          <div className="flex justify-center mb-16">
            <PulseBeams onClick={toggleContact}>
              {isContactVisible ? "Hide Contact Information" : "Show Contact Information"}
            </PulseBeams>
          </div>
        </div>

        <AnimatePresence>
          {isContactVisible && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h4 className="text-2xl font-semibold mb-6 dark:text-white light:text-gray-900">Contact Information</h4>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white light:text-gray-900">Phone</p>
                      <p className="dark:text-white/70 light:text-gray-700">+1 (555) 123-4567</p>
                      <p className="dark:text-white/70 light:text-gray-700">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white light:text-gray-900">Email</p>
                      <p className="dark:text-white/70 light:text-gray-700">info@proactivecctv.com</p>
                      <p className="dark:text-white/70 light:text-gray-700">support@proactivecctv.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white light:text-gray-900">Address</p>
                      <p className="dark:text-white/70 light:text-gray-700">
                        123 Security Avenue<br />
                        Suite 456<br />
                        Cityville, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="h-full">
                  <h4 className="text-2xl font-semibold mb-6 dark:text-white light:text-gray-900">Global Coverage</h4>
                  <div className="h-full w-full">
                    <WorldMapDemo />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
