import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Octahedron, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Material = () => (
  <meshStandardMaterial 
    color="#C9973A" 
    metalness={0.8} 
    roughness={0.2} 
  />
);

function FloatingShape({ position, type, scale, speed }: { position: [number, number, number], type: 'box' | 'octahedron' | 'torus', scale: number, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.015 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === 'box' && <Box args={[1, 1, 1]}><Material /></Box>}
      {type === 'octahedron' && <Octahedron args={[1, 0]}><Material /></Octahedron>}
      {type === 'torus' && <Torus args={[0.8, 0.2, 16, 32]}><Material /></Torus>}
    </mesh>
  );
}

export default function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    // Smooth mouse follow for parallax
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.pointer.x * Math.PI) / 10, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.pointer.y * Math.PI) / 10, 0.05);

    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x;
      groupRef.current.rotation.x = -mouse.current.y;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#D4A843" />
      <Environment preset="city" />

      <group ref={groupRef}>
        <FloatingShape type="torus" position={[-4, 2, -2]} scale={1.5} speed={0.8} />
        <FloatingShape type="octahedron" position={[5, -1, -4]} scale={2} speed={0.5} />
        <FloatingShape type="box" position={[-3, -3, 1]} scale={1} speed={1.2} />
        <FloatingShape type="torus" position={[3, 3, 2]} scale={1} speed={0.9} />
        <FloatingShape type="octahedron" position={[-6, 0, -6]} scale={1.8} speed={0.6} />
        <FloatingShape type="box" position={[6, 2, -3]} scale={1.2} speed={1.1} />
        <FloatingShape type="torus" position={[-2, 4, -4]} scale={0.8} speed={1.5} />
        <FloatingShape type="octahedron" position={[1, -4, -2]} scale={1.5} speed={0.7} />
      </group>
    </>
  );
}
