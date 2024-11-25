/* eslint-disable */
"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface User3DModelProps {
  props: unknown;
}

interface GLTFData {
  nodes: { [name: string]: Mesh };
  materials: { [name: string]: any };
}

export function User3DModel(props: User3DModelProps) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb") as unknown as GLTFData;


  const modelRef = useRef<Mesh>();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      scale={[2.4, 2.4, 2.4]}
      rotation={[0.05, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.defaultMaterial.geometry}
        material={materials.blinn1SG}
      />
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.blinn4SG}
      />
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.defaultMaterial_2.geometry}
        material={materials.blinn3SG}
      />
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.defaultMaterial_3.geometry}
        material={materials.MeetMat2_defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        // eslint-disable-next-line
        geometry={nodes.defaultMaterial_4.geometry}
        material={materials.blinn2SG}
      />
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
