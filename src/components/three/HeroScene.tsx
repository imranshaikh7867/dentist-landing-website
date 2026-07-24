"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import ToothModel from "./ToothModel";

function Pearls() {
  const pearls = [
    { p: [2.6, 1.2, -1] as const, s: 0.3, c: "#dcbd85" },
    { p: [-2.8, -0.5, -0.6] as const, s: 0.4, c: "#86e2d6" },
    { p: [2.1, -1.5, 0.6] as const, s: 0.22, c: "#b9efe8" },
    { p: [-2.0, 1.6, 0.2] as const, s: 0.18, c: "#c9a25a" },
  ];
  return (
    <>
      {pearls.map((o, i) => (
        <Float key={i} speed={2 + i} rotationIntensity={1} floatIntensity={2}>
          <mesh position={o.p} scale={o.s}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={o.c}
              metalness={0.6}
              roughness={0.15}
              envMapIntensity={1.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 4]} intensity={1.3} castShadow />
        <pointLight position={[-5, -2, 3]} intensity={30} color="#35c4b2" />
        <pointLight position={[4, 3, -4]} intensity={22} color="#dcbd85" />

        <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.9}>
          <ToothModel spin={0.3} pointerParallax fit={2.7} rotation={[0.15, 0, 0]} />
        </Float>

        <Pearls />

        <ContactShadows
          position={[0, -1.9, 0]}
          opacity={0.32}
          scale={12}
          blur={3}
          far={4}
          color="#0a3a34"
        />

        <Environment resolution={256}>
          <group>
            <Lightformer
              intensity={2.6}
              position={[0, 3, 2]}
              scale={[9, 3, 1]}
              color="#dbf6f2"
            />
            <Lightformer
              intensity={1.7}
              position={[-4, 1, 1]}
              scale={[4, 4, 1]}
              color="#55d3c3"
            />
            <Lightformer
              intensity={1.3}
              position={[4, -1, 2]}
              scale={[4, 4, 1]}
              color="#dcbd85"
            />
          </group>
        </Environment>
      </Suspense>
    </Canvas>
  );
}
