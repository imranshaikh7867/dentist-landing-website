"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/base.glb");

type Props = {
  /** idle auto-spin speed (radians/sec). 0 to disable */
  spin?: number;
  /** subtle tilt toward the pointer */
  pointerParallax?: boolean;
  /** if provided, Y rotation is driven by this 0..1 ref (× turns) */
  scrollProgress?: RefObject<number>;
  /** number of full turns across a 0..1 scrollProgress */
  turns?: number;
  /** target fitted size (world units of the largest dimension) */
  fit?: number;
  /** base orientation */
  rotation?: [number, number, number];
  position?: [number, number, number];
};

/**
 * The real clinic tooth scan (base.glb), auto-centered and scaled to a
 * predictable size, wrapped in a glossy pearl-enamel physical material.
 */
export default function ToothModel({
  spin = 0.35,
  pointerParallax = true,
  scrollProgress,
  turns = 1,
  fit = 2.6,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}: Props) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/models/base.glb") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };

  // Find the first mesh with geometry, normalize its transform.
  const { geometry, scale, offset } = useMemo(() => {
    const mesh =
      nodes.model ?? Object.values(nodes).find((n) => n.geometry);
    const geo = mesh.geometry as THREE.BufferGeometry;
    geo.computeBoundingBox();
    const box = geo.boundingBox!;
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return {
      geometry: geo,
      scale: fit / maxDim,
      offset: center,
    };
  }, [nodes, fit]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    if (scrollProgress) {
      g.rotation.y = scrollProgress.current * Math.PI * 2 * turns;
    } else if (spin) {
      g.rotation.y += delta * spin;
    }

    if (pointerParallax && inner.current) {
      inner.current.rotation.x = THREE.MathUtils.lerp(
        inner.current.rotation.x,
        -state.pointer.y * 0.25,
        0.05
      );
      inner.current.position.x = THREE.MathUtils.lerp(
        inner.current.position.x,
        state.pointer.x * 0.15,
        0.05
      );
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      <group ref={inner}>
        <mesh
          geometry={geometry}
          scale={scale}
          position={[
            -offset.x * scale,
            -offset.y * scale,
            -offset.z * scale,
          ]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#f4efe6"
            roughness={0.26}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0.16}
            sheen={0.6}
            sheenColor={new THREE.Color("#ffffff")}
            sheenRoughness={0.4}
            envMapIntensity={1.15}
            emissive={new THREE.Color("#123f39")}
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>
    </group>
  );
}
