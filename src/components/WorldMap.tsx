
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Location {
  id: number;
  x: number;
  y: number;
  name: string;
  country: string;
}

const locations: Location[] = [
  { id: 1, x: 20, y: 35, name: "New York", country: "United States" },
  { id: 2, x: 45, y: 30, name: "London", country: "United Kingdom" },
  { id: 3, x: 52, y: 35, name: "Berlin", country: "Germany" },
  { id: 4, x: 75, y: 40, name: "Tokyo", country: "Japan" },
  { id: 5, x: 80, y: 55, name: "Sydney", country: "Australia" },
  { id: 6, x: 35, y: 50, name: "Moscow", country: "Russia" },
  { id: 7, x: 48, y: 45, name: "Dubai", country: "UAE" },
  { id: 8, x: 68, y: 38, name: "Delhi", country: "India" },
  { id: 9, x: 30, y: 42, name: "Paris", country: "France" },
  { id: 10, x: 25, y: 60, name: "Toronto", country: "Canada" },
];

const WorldMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] bg-background/30 backdrop-blur-lg rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-30"></div>
        
        {/* World Map SVG */}
        <svg
          width="90%"
          height="90%"
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-40"
        >
          <path
            d="M17.03 16.03L19.35 17.51L22.9 17.51L25.21 14.83L27.7 13.77L28.92 10.67L27.7 8.72L29.3 6.77L28.07 5.71L26.43 4.23L23.31 4.23L21.84 2.74L19.35 4.65L17.45 6.57L14.76 7.64L14.33 9.99L16.6 11.67L17.03 16.03Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M35.5 16.2L37.5 16.2L39.5 14.2L39.5 12.2L37.5 12.2L35.5 14.2L35.5 16.2Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M61.5 16.2L65.5 16.2L67.5 14.2L67.5 11.2L65.5 9.2L61.5 9.2L59.5 11.2L59.5 14.2L61.5 16.2Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M94.1 17.8L92.1 15.8L88.1 15.8L86.1 17.8L86.1 20.8L88.1 22.8L92.1 22.8L94.1 20.8L94.1 17.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M92.5 27.5L90.5 25.5L86.5 25.5L84.5 27.5L84.5 30.5L86.5 32.5L90.5 32.5L92.5 30.5L92.5 27.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M5.7 19.6L9.7 19.6L11.7 17.6L11.7 14.6L9.7 12.6L5.7 12.6L3.7 14.6L3.7 17.6L5.7 19.6Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M7.3 28.9L11.3 28.9L13.3 26.9L13.3 23.9L11.3 21.9L7.3 21.9L5.3 23.9L5.3 26.9L7.3 28.9Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M24.4 25.5L28.4 25.5L30.4 23.5L30.4 20.5L28.4 18.5L24.4 18.5L22.4 20.5L22.4 23.5L24.4 25.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M26 31.6L30 31.6L32 29.6L32 26.6L30 24.6L26 24.6L24 26.6L24 29.6L26 31.6Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M32.7 36.5L36.7 36.5L38.7 34.5L38.7 31.5L36.7 29.5L32.7 29.5L30.7 31.5L30.7 34.5L32.7 36.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M39.4 22.7L43.4 22.7L45.4 20.7L45.4 17.7L43.4 15.7L39.4 15.7L37.4 17.7L37.4 20.7L39.4 22.7Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M44.9 28.4L48.9 28.4L50.9 26.4L50.9 23.4L48.9 21.4L44.9 21.4L42.9 23.4L42.9 26.4L44.9 28.4Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M49 35.8L53 35.8L55 33.8L55 30.8L53 28.8L49 28.8L47 30.8L47 33.8L49 35.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M55.7 41.9L59.7 41.9L61.7 39.9L61.7 36.9L59.7 34.9L55.7 34.9L53.7 36.9L53.7 39.9L55.7 41.9Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M57.3 23.4L61.3 23.4L63.3 21.4L63.3 18.4L61.3 16.4L57.3 16.4L55.3 18.4L55.3 21.4L57.3 23.4Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M67.3 27.4L71.3 27.4L73.3 25.4L73.3 22.4L71.3 20.4L67.3 20.4L65.3 22.4L65.3 25.4L67.3 27.4Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M63.7 34.8L67.7 34.8L69.7 32.8L69.7 29.8L67.7 27.8L63.7 27.8L61.7 29.8L61.7 32.8L63.7 34.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M73.7 38.8L77.7 38.8L79.7 36.8L79.7 33.8L77.7 31.8L73.7 31.8L71.7 33.8L71.7 36.8L73.7 38.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M80.4 31.6L84.4 31.6L86.4 29.6L86.4 26.6L84.4 24.6L80.4 24.6L78.4 26.6L78.4 29.6L80.4 31.6Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M75.9 43.2L79.9 43.2L81.9 41.2L81.9 38.2L79.9 36.2L75.9 36.2L73.9 38.2L73.9 41.2L75.9 43.2Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M70.4 48.8L74.4 48.8L76.4 46.8L76.4 43.8L74.4 41.8L70.4 41.8L68.4 43.8L68.4 46.8L70.4 48.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M64.9 52.8L68.9 52.8L70.9 50.8L70.9 47.8L68.9 45.8L64.9 45.8L62.9 47.8L62.9 50.8L64.9 52.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M59.4 57.4L63.4 57.4L65.4 55.4L65.4 52.4L63.4 50.4L59.4 50.4L57.4 52.4L57.4 55.4L59.4 57.4Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M53.9 50.5L57.9 50.5L59.9 48.5L59.9 45.5L57.9 43.5L53.9 43.5L51.9 45.5L51.9 48.5L53.9 50.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M48.4 44.0L52.4 44.0L54.4 42.0L54.4 39.0L52.4 37.0L48.4 37.0L46.4 39.0L46.4 42.0L48.4 44.0Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M42.9 38.2L46.9 38.2L48.9 36.2L48.9 33.2L46.9 31.2L42.9 31.2L40.9 33.2L40.9 36.2L42.9 38.2Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M38.4 43.8L42.4 43.8L44.4 41.8L44.4 38.8L42.4 36.8L38.4 36.8L36.4 38.8L36.4 41.8L38.4 43.8Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M43.9 49.5L47.9 49.5L49.9 47.5L49.9 44.5L47.9 42.5L43.9 42.5L41.9 44.5L41.9 47.5L43.9 49.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M33.9 49.5L37.9 49.5L39.9 47.5L39.9 44.5L37.9 42.5L33.9 42.5L31.9 44.5L31.9 47.5L33.9 49.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M38.4 55.9L42.4 55.9L44.4 53.9L44.4 50.9L42.4 48.9L38.4 48.9L36.4 50.9L36.4 53.9L38.4 55.9Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M27.9 55.9L31.9 55.9L33.9 53.9L33.9 50.9L31.9 48.9L27.9 48.9L25.9 50.9L25.9 53.9L27.9 55.9Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M22.4 49.5L26.4 49.5L28.4 47.5L28.4 44.5L26.4 42.5L22.4 42.5L20.4 44.5L20.4 47.5L22.4 49.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M27.9 42.5L31.9 42.5L33.9 40.5L33.9 37.5L31.9 35.5L27.9 35.5L25.9 37.5L25.9 40.5L27.9 42.5Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M17.9 43.2L21.9 43.2L23.9 41.2L23.9 38.2L21.9 36.2L17.9 36.2L15.9 38.2L15.9 41.2L17.9 43.2Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M22.4 37.7L26.4 37.7L28.4 35.7L28.4 32.7L26.4 30.7L22.4 30.7L20.4 32.7L20.4 35.7L22.4 37.7Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M16.9 31.6L20.9 31.6L22.9 29.6L22.9 26.6L20.9 24.6L16.9 24.6L14.9 26.6L14.9 29.6L16.9 31.6Z"
            fill="currentColor"
            className="text-primary/30"
          />
          <path
            d="M15.4 37.7L19.4 37.7L21.4 35.7L21.4 32.7L19.4 30.7L15.4 30.7L13.4 32.7L13.4 35.7L15.4 37.7Z"
            fill="currentColor"
            className="text-primary/30"
          />
        </svg>
      
        {/* Location markers */}
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="absolute cursor-pointer"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: location.id * 0.1 }}
            onHoverStart={() => setActiveLocation(location)}
            onHoverEnd={() => setActiveLocation(null)}
          >
            <div className="relative">
              <div className="h-3 w-3 bg-primary rounded-full" />
              <div className="absolute inset-0 -m-1 h-5 w-5 bg-primary/30 rounded-full animate-ping" />
              
              {activeLocation?.id === location.id && (
                <motion.div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-lg border border-primary/20 w-max"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ zIndex: 10 }}
                >
                  <p className="font-medium text-sm whitespace-nowrap">{location.name}</p>
                  <p className="text-xs text-white/70">{location.country}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      
        {/* Connection lines that randomly light up */}
        {locations.map((location, index) => {
          if (index === locations.length - 1) return null;
          const nextLocation = locations[index + 1];
          return (
            <motion.div
              key={`line-${location.id}`}
              className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: location.id * 0.15 }}
            >
              <svg width="100%" height="100%" className="absolute inset-0">
                <line
                  x1={`${location.x}%`}
                  y1={`${location.y}%`}
                  x2={`${nextLocation.x}%`}
                  y2={`${nextLocation.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeDasharray="5,5"
                  strokeOpacity="0.3"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">Worldwide Remote Monitoring</h3>
          <p className="text-sm text-white/70">
            Our advanced CCTV systems allow you to monitor your property from anywhere in the world. 
            With 24/7 access via our secure mobile app, you'll never be out of touch with your security system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
