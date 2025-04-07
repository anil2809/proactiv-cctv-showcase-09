
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import CCTVCanvas from "./CCTVCanvas";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const words = ["Secure", "Protect", "Monitor", "Safeguard"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="aurora-bg"></div>
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <svg width="0" height="0" className="absolute">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 30 -11
            "
          />
        </filter>
      </svg>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                Professional CCTV Solutions
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="gooey-text inline-block text-gradient mr-2"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              Your Property With
              <span className="text-gradient"> Advanced CCTV</span> Solutions
            </h1>
            
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Protect what matters most with our state-of-the-art CCTV installation and monitoring services. Get professional security solutions tailored to your needs.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                className="bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-white/10 hover:bg-white/5 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              className="pt-4 flex items-center justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">500+</span>
                <span className="text-sm text-white/70">Projects Completed</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">98%</span>
                <span className="text-sm text-white/70">Customer Satisfaction</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">24/7</span>
                <span className="text-sm text-white/70">Support</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-10">
                <CCTVCanvas />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-white/70">Interactive 3D Model</span>
                  </div>
                  <h3 className="text-white font-medium mt-1">Advanced CCTV System</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
