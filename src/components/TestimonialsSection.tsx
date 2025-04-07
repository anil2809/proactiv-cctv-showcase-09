
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rachel Thompson",
    role: "Homeowner",
    content:
      "ProActive CCTV's home security system gives me peace of mind when I'm away. The cameras are discreet yet effective, and their mobile app makes it easy to check on my home anytime.",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    content:
      "After multiple break-ins at our warehouse, we hired ProActive CCTV for a commercial security solution. Since installation, we've had zero incidents and the system has already paid for itself.",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Property Manager",
    content:
      "Managing multiple properties requires reliable security. ProActive CCTV's centralized monitoring system allows me to oversee all locations from one dashboard. Their customer service is exceptional.",
    avatar: "/images/testimonial-3.jpg",
  },
  {
    name: "David Chen",
    role: "Retail Store Manager",
    content:
      "The analytics features of our new security system have been game-changing for our retail operation. We've reduced shoplifting by 85% and gained valuable insights into customer behavior.",
    avatar: "/images/testimonial-4.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.5,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.4,
    },
  }),
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white light:text-gray-900">
            What Our Clients Say
          </h3>
          <p className="dark:text-white/70 light:text-gray-700">
            Hear from our satisfied customers about their experience with our CCTV installation and security services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[450px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-gray-200 rounded-xl p-8 w-full max-w-2xl relative dark:bg-black/10 light:bg-white/80">
                  <Quote className="absolute top-8 left-8 h-12 w-12 text-primary opacity-20" />
                  
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-70" />
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-white dark:text-white light:text-gray-800">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-semibold dark:text-white light:text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm dark:text-white/60 light:text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg dark:text-white/90 light:text-gray-800 text-center md:text-left italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200 rounded-r-full p-3 hover:bg-primary/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 dark:text-white light:text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200 rounded-l-full p-3 hover:bg-primary/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 dark:text-white light:text-gray-800" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? "bg-primary w-6" 
                    : "dark:bg-white/30 light:bg-gray-300 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
