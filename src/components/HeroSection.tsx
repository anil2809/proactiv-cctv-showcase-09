
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CCTVCanvas from "./CCTVCanvas";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern noise-bg opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                Professional CCTV Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Secure</span> Your Property With
              <span className="text-gradient"> Advanced CCTV</span> Solutions
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto lg:mx-0">
              Protect what matters most with our state-of-the-art CCTV installation and monitoring services. Get professional security solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-8">
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
            </div>
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
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-white/70">Interactive Model</span>
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
