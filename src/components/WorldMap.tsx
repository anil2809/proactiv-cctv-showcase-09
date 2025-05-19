
import React from "react";
import { GlobeDemo } from "./GlobeDemo";

const WorldMapComponent: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden bg-background/30 backdrop-blur-lg">
      <div className="h-[500px] flex items-center justify-center">
        <GlobeDemo />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">Worldwide Remote Monitoring</h3>
          <p className="text-sm text-white/90 dark:text-white/90 light:text-gray-800">
            Our advanced CCTV systems allow you to monitor your property from anywhere in the world. 
            With 24/7 access via our secure mobile app, you'll never be out of touch with your security system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldMapComponent;
