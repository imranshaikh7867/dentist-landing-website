"use client";

import { Suspense, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import ToothModel from "./ToothModel";

/**
 * Dramatic dark-stage tooth used in the pinned Precision showcase.
 * Its Y rotation is driven by `progress` (0..1) coming from a GSAP
 * ScrollTrigger, so the tooth turns as the section is scrolled.
 */
export default function ShowcaseScene({
  progress,
}: {
  progress: RefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <spotLight
          position={[6, 8, 6]}
          angle={0.4}
          penumbra={1}
          intensity={40}
          color="#ffffff"
        />
        <pointLight position={[-6, -1, 2]} intensity={45} color="#1c9a8c" />
        <pointLight position={[5, 2, -3]} intensity={30} color="#dcbd85" />

        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.6}>
          <ToothModel
            spin={0}
            pointerParallax={false}
            scrollProgress={progress}
            turns={1.25}
            fit={3.1}
            rotation={[0.1, 0, 0]}
          />
        </Float>

        <Environment resolution={256}>
          <group>
            <Lightformer intensity={3} position={[0, 3, 3]} scale={[10, 4, 1]} color="#bff3ec" />
            <Lightformer intensity={2} position={[-5, 0, 2]} scale={[5, 6, 1]} color="#35c4b2" />
            <Lightformer intensity={1.6} position={[5, -1, 1]} scale={[5, 5, 1]} color="#dcbd85" />
            <Lightformer intensity={1.2} position={[0, -4, 2]} scale={[8, 3, 1]} color="#ffffff" />
          </group>
        </Environment>
      </Suspense>
    </Canvas>
  );
}
