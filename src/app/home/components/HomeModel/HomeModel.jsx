import React from "react";
import { User3DModel } from "@/app/components/User3DModel/User3DModel";
import { RenderModel } from "@/app/components/RenderModel";

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
