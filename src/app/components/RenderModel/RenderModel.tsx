"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { Suspense } from "react";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

const RenderModel: NextPage<RenderModelProps> = ({ children, className = "" }) => {
  return (
    <>
      <Canvas className={`h-auto ${className}`}>
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="forest" />
      </Canvas>
    </>
  );
};

export default RenderModel;
