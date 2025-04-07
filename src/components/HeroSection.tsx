
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import CCTVCanvas from "./CCTVCanvas";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const slideInVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const words = ["Secure", "Protect", "Monitor", "Safeguard"];

const heroImages = [
  "https://images.pexels.com/photos/2873417/pexels-photo-2873417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/371949/pexels-photo-371949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
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

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0"
                  initial={slideInVariant.hidden}
                  animate={slideInVariant.visible}
                  exit={{ x: -100, opacity: 0 }}
                >
                  <img
                    src={heroImages[currentImageIndex]}
                    alt="CCTV security camera"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <CCTVCanvas />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs dark:text-white/70 light:text-gray-600">Interactive 3D Model</span>
                  </div>
                  <h3 className="dark:text-white light:text-gray-800 font-medium mt-1">Advanced CCTV System</h3>
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
