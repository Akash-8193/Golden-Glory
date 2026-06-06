import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 800;
  
  const [positions, initialPositions] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 8 + Math.random() * 10;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
    }
    
    return [positions, initialPositions];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const mouse = state.pointer;
    
    // Map mouse to 3D space roughly
    const mouse3D = new THREE.Vector3(
      mouse.x * 10,
      mouse.y * 10,
      0
    );

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];
      
      const particlePos = new THREE.Vector3(x, y, z);
      const dist = particlePos.distanceTo(mouse3D);
      
      // Gentle drift
      const time = state.clock.elapsedTime;
      const noise = Math.sin(time * 0.5 + i) * 0.02;
      
      // Repel from mouse
      if (dist < 4) {
        const dir = particlePos.clone().sub(mouse3D).normalize();
        const force = (4 - dist) * 0.1;
        positions[i3] += dir.x * force;
        positions[i3 + 1] += dir.y * force;
        positions[i3 + 2] += dir.z * force;
      } else {
        // Return to initial position slowly
        positions[i3] = THREE.MathUtils.lerp(positions[i3], initialPositions[i3] + noise, 0.05);
        positions[i3 + 1] = THREE.MathUtils.lerp(positions[i3 + 1], initialPositions[i3 + 1] + noise, 0.05);
        positions[i3 + 2] = THREE.MathUtils.lerp(positions[i3 + 2], initialPositions[i3 + 2] + noise, 0.05);
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4A843"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
