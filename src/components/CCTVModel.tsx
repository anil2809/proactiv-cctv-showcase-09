
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Group } from "three";

export function CCTVModel(props: any) {
  const group = useRef<Group>(null);
  
  // Use a simplified model for the CCTV camera
  useFrame((state) => {
    if (!group.current) return;
    
    // Add gentle rotation animation
    group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main camera body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 1.2, 16]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Camera lens */}
      <mesh castShadow position={[0, 0, -0.7]}>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Camera lens glass */}
      <mesh position={[0, 0, -0.9]}>
        <cylinderGeometry args={[0.25, 0.25, 0.1, 16]} />
        <meshStandardMaterial color="#222" metalness={1} roughness={0} />
      </mesh>
      
      {/* Mount bracket */}
      <mesh castShadow receiveShadow position={[0, -0.8, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial color="#444" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Status LED */}
      <mesh position={[0.3, 0.3, 0.6]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}
