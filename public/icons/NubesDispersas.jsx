import * as React from "react";
const NubesDispersas = (props) => (
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
        "\n@keyframes a0_t { 0% { transform: translate(41.4617px,26.8779px) scale(1,1) translate(-14.7px,-14.7px); animation-timing-function: cubic-bezier(0.86,0,0.07,1); } 50% { transform: translate(41.4617px,26.8779px) scale(0.7,0.7) translate(-14.7px,-14.7px); animation-timing-function: cubic-bezier(0.86,0,0.07,1); } 100% { transform: translate(41.4617px,26.8779px) scale(1,1) translate(-14.7px,-14.7px); } }\n@keyframes a1_t { 0% { transform: translate(41.4617px,26.8779px) rotate(0deg) translate(-14.7px,-14.7px); } 100% { transform: translate(41.4617px,26.8779px) rotate(360deg) translate(-14.7px,-14.7px); } }\n@keyframes a1_o { 0% { opacity: 1; animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 50% { opacity: 0.2; animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 100% { opacity: 1; } }\n@keyframes a2_t { 0% { transform: translate(8.010782px,17.5979px); animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 50% { transform: translate(8.010782px,11.5979px); animation-timing-function: cubic-bezier(0.445,0.05,0.55,0.95); } 100% { transform: translate(8.010782px,17.5979px); } }\n    "
      }
    </style>
    <g transform="translate(26.7617,12.1779)">
      <ellipse
        fill="#FFCE55"
        rx={8.7}
        ry={8.7}
        transform="translate(0,0) translate(14.7,14.7)"
      />
    </g>
    <g
      transform="translate(41.4617,26.8779) translate(-14.7,-14.7)"
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
      transform="translate(41.4617,26.8779) translate(-14.7,-14.7)"
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
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(5.5,5.5)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(23.9,23.9)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(5.5,23.9)"
      />
      <ellipse
        fill="#FFCE55"
        rx={1.7}
        ry={1.7}
        transform="translate(0,0) translate(23.9,5.5)"
      />
    </g>
    <path
      fill="#EBF2F2"
      d="M32.1,14.2C32.1,14.2,32,14.2,32,14.2C31.1,6.2,24.3,0,16,0C7.2,0,0,7.2,0,16C0,24.8,7.2,32,16,32L32,32C36.9,32,40.9,28,40.9,23.1C41,18.2,37,14.2,32.1,14.2Z"
      transform="translate(28.4617,33.5979) translate(-20.4509,-16)"
      style={{
        animation: "3s linear infinite both a2_t",
      }}
    />
  </svg>
);
export default NubesDispersas;
