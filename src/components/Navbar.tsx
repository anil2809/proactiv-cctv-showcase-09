
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      const sections = ["home", "services", "projects", "testimonials", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold dark:text-white light:text-gray-900">Reddy Technologies CCTV</span>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className={`text-sm font-medium dark:text-white/80 light:text-gray-700 hover:text-primary transition-colors tubelight ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              Home
            </a>
            <a 
              href="#services" 
              className={`text-sm font-medium dark:text-white/80 light:text-gray-700 hover:text-primary transition-colors tubelight ${
                activeSection === "services" ? "active" : ""
              }`}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className={`text-sm font-medium dark:text-white/80 light:text-gray-700 hover:text-primary transition-colors tubelight ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              Projects
            </a>
            <a 
              href="#testimonials" 
              className={`text-sm font-medium dark:text-white/80 light:text-gray-700 hover:text-primary transition-colors tubelight ${
                activeSection === "testimonials" ? "active" : ""
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-medium dark:text-white/80 light:text-gray-700 hover:text-primary transition-colors tubelight ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </a>
            
            <motion.button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-background/20 hover:bg-background/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            <Button 
              className="bg-primary hover:bg-primary/80 text-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-white light:text-gray-900 hover:text-white hover:bg-primary/10 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "home" ? "text-primary" : "dark:text-white light:text-gray-900"
              } hover:bg-primary/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "services" ? "text-primary" : "dark:text-white light:text-gray-900"
              } hover:bg-primary/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "projects" ? "text-primary" : "dark:text-white light:text-gray-900"
              } hover:bg-primary/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "testimonials" ? "text-primary" : "dark:text-white light:text-gray-900"
              } hover:bg-primary/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "contact" ? "text-primary" : "dark:text-white light:text-gray-900"
              } hover:bg-primary/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm dark:text-white light:text-gray-900">Theme</span>
                <motion.button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-background/20 hover:bg-background/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/80 text-white"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
