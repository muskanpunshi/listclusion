"use client";

import React from "react";

type IconXShapeProps = {
  fill?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

const IconXShape: React.FC<IconXShapeProps> = ({
  fill = "#ae7a19",
  width = 236,
  height = 268,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 236 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M118.048 0V268" stroke={fill} strokeWidth="6" />
      <path d="M2 67.002L234.095 201.002" stroke={fill} strokeWidth="6" />
      <path d="M234.096 67.002L2.0009 201.002" stroke={fill} strokeWidth="6" />
    </svg>
  );
};

export default IconXShape;
