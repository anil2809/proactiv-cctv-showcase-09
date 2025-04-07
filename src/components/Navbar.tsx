
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-white">ProActive CCTV</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/80 text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary/10 focus:outline-none"
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
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/80 text-white">
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
