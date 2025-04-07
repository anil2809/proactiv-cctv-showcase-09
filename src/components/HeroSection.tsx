
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CCTVCanvas from "./CCTVCanvas";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import AnimatedTextCycle from "./ui/animated-text-cycle";

const heroImages = [
  "/lovable-uploads/a2ac66ee-f26f-4733-a987-3140fa5bc9c8.png",
  "/lovable-uploads/3213b3e2-090b-4cf4-8d8e-d8e6615194d4.png",
  "/lovable-uploads/6d021fb1-9b79-4f21-83b8-715eadb93541.png",
  "/lovable-uploads/ea9b7fdd-f7c4-4ed7-8f0d-3eccc010d8a5.png"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="aurora-bg"></div>
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="absolute top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="rounded-full w-10 h-10"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white light:text-gray-900">
              Secure Your Property With <br />
              <AnimatedTextCycle
                className="text-gradient"
                words={["Advanced CCTV", "Smart Security", "24/7 Monitoring", "HD Surveillance"]}
                speed={3000}
              />
              <br /> Solutions
            </h1>
            
            <motion.p 
              className="text-lg dark:text-white/70 light:text-gray-700 max-w-2xl mx-auto lg:mx-0"
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
                className="dark:border-white/10 dark:hover:bg-white/5 dark:text-white light:border-gray-300 light:text-gray-800 light:hover:bg-gray-100 text-lg px-8 py-6"
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
                <span className="text-sm dark:text-white/70 light:text-gray-600">Projects Completed</span>
              </div>
              <div className="h-12 w-px dark:bg-white/10 light:bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">98%</span>
                <span className="text-sm dark:text-white/70 light:text-gray-600">Customer Satisfaction</span>
              </div>
              <div className="h-12 w-px dark:bg-white/10 light:bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">24/7</span>
                <span className="text-sm dark:text-white/70 light:text-gray-600">Support</span>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={heroImages[currentImageIndex]}
                alt="CCTV security camera"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-white/70">Professional Installation</span>
                </div>
                <h3 className="text-white font-medium mt-1">Advanced CCTV System</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
