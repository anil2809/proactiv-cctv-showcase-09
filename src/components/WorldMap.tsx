
import React from "react";
import { GlobeDemo } from "./GlobeDemo";

const WorldMapComponent: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-transparent">
      <div className="h-[500px] flex items-center justify-center">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default WorldMapComponent;
