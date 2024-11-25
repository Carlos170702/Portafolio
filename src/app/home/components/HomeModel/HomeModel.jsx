import React from "react";
import { User3DModel } from "@/components/User3DModel/User3DModel";
import { RenderModel } from "@/components/RenderModel";

const HomeModel = () => {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[600px]">
      <RenderModel>
        <User3DModel />
      </RenderModel>
    </div>
  );
};

export default HomeModel;
