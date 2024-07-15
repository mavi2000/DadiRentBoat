import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const CircularBar = ({ completionPercentage }) => {
  const formattedPercentage = completionPercentage.toFixed(1);

  return (
    <div className="flex mt-auto">
      <div className="w-24 md:w-36">
        <CircularProgressbarWithChildren
          value={completionPercentage}
          strokeWidth={10}
          styles={{
            path: { stroke: "#CBA557" },
            trail: { stroke: "#edf0f0", strokeWidth: 8 },
            text: { fill: "#07474F", fontSize: "2rem", fontWeight: "bold" },
          }}
        >
          <div style={{ padding: "12px", textAlign: "center" }}>
            <div className="text-[#07474F] text-2xl font-semibold">
              {formattedPercentage}%
            </div>
            <div className="text-[#07474F] text-sm font-normal">
              completed
            </div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularBar;
