
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CCTVModel } from "./CCTVModel";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";

const CCTVCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} />
          
          <CCTVModel position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5} />
          
          <ContactShadows 
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
          />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CCTVCanvas;
