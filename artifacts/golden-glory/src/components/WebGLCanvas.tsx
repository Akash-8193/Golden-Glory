import React, { ReactNode, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const ctx =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!ctx) return false;
    const gl = ctx as WebGLRenderingContext;
    return !gl.isContextLost();
  } catch {
    return false;
  }
}

export default function WebGLCanvas({ children, fallback, className, camera }: Props) {
  const webglOk = useMemo(() => isWebGLAvailable(), []);

  if (!webglOk) {
    return <>{fallback ?? null}</>;
  }

  return (
    <Canvas
      className={className}
      camera={camera}
      gl={{ failIfMajorPerformanceCaveat: false, powerPreference: 'default' }}
      onCreated={() => {}}
    >
      {children}
    </Canvas>
  );
}
