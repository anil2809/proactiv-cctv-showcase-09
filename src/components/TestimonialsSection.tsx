
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rachel Thompson",
    role: "Homeowner",
    content:
      "ProActive CCTV's home security system gives me peace of mind when I'm away. The cameras are discreet yet effective, and their mobile app makes it easy to check on my home anytime.",
    avatar: "RT",
  },
  {
    name: "Michael Johnson",
    role: "Business Owner",
    content:
      "After multiple break-ins at our warehouse, we hired ProActive CCTV for a commercial security solution. Since installation, we've had zero incidents and the system has already paid for itself.",
    avatar: "MJ",
  },
  {
    name: "Sarah Williams",
    role: "Property Manager",
    content:
      "Managing multiple properties requires reliable security. ProActive CCTV's centralized monitoring system allows me to oversee all locations from one dashboard. Their customer service is exceptional.",
    avatar: "SW",
  },
  {
    name: "David Chen",
    role: "Retail Store Manager",
    content:
      "The analytics features of our new security system have been game-changing for our retail operation. We've reduced shoplifting by 85% and gained valuable insights into customer behavior.",
    avatar: "DC",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h3>
          <p className="text-white/70">
            Hear from our satisfied customers about their experience with our CCTV installation and security services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 border-2 border-primary/30">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-white/80">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-4 flex">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
