import * as React from "react";
const DiaClaro = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 64 64"
    width={70}
    height={70}
    style={{
      whiteSpace: "pre",
    }}
    {...props}
  >
    <style>
      {
        "\n@keyframes a0_t { 0% { transform: translate(32px,32px) scale(1,1) translate(-14.7px,-14.7px); animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 50% { transform: translate(32px,32px) scale(0.9,0.9) translate(-14.7px,-14.7px); animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 100% { transform: translate(32px,32px) scale(1,1) translate(-14.7px,-14.7px); } }\n@keyframes a1_t { 0% { transform: translate(32px,32px) rotate(0deg) translate(-14.7px,-14.7px); } 100% { transform: translate(32px,32px) rotate(360deg) translate(-14.7px,-14.7px); } }\n@keyframes a1_o { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }\n    "
      }
    </style>
    <g transform="translate(17.3,17.3)">
      <ellipse
        fill="#FFCE55"
        rx={8.7}
        ry={8.7}
        transform="translate(0,0) translate(14.7,14.7)"
      />
    </g>
    <g
      transform="translate(32,32) translate(-14.7,-14.7)"
      style={{
        animation: "3s linear infinite both a0_t",
      }}
    >
      <ellipse
        fill="#FFAF57"
        rx={5.7}
        ry={5.7}
        transform="translate(0,0) translate(14.7,14.7)"
      />
    </g>
    <g
      opacity={1}
      transform="translate(32,32) translate(-14.7,-14.7)"
      style={{
        animation: "3s linear infinite both a1_t, 3s linear infinite both a1_o",
      }}
    >
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(14.7,1.7)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(14.7,27.7)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(1.7,14.7)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(27.7,14.7)"
      />
    </g>
  </svg>
);
export default DiaClaro;
