import * as React from "react";
const ClaroNubes = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={60}
    height={60}
    style={{
      shapeRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <defs>
      <path
        id="b"
        d="M175 137c2 2 2 6 0 8s-6 2-8 0l-63-63c-2-2-2-6 0-8 3-2 6-2 9 0l62 63zm-33 67c4 0 6 3 6 6s-2 6-6 6H54c-4 0-6-3-6-6s2-6 6-6h88zM367 74c3-2 6-2 9 0 2 2 2 6 0 8l-63 63c-2 2-6 2-8 0s-2-6 0-8l62-63zM167 275c2-2 6-2 8 0s2 6 0 8l-62 63c-3 2-6 2-9 0-2-2-2-6 0-8l63-63zm-15-108c3 2 4 5 3 8s-5 4-8 3l-33-14c-3-1-4-4-3-7s5-5 8-3l33 13zm134-83c1-3 4-4 7-3s5 5 3 8l-13 33c-1 3-5 4-8 3s-4-5-3-8l14-33zm-89 214c1-3 5-4 8-3s4 5 3 8l-14 33c-1 3-4 4-7 3s-5-5-4-8l14-33zm164-144c3-2 6 0 8 3 1 3-1 6-4 7l-32 14c-3 1-7 0-8-3s0-7 3-8l33-13zm-214 88c3-1 7 0 8 3s0 7-3 8l-33 14c-3 1-6-1-8-4-1-3 0-6 3-7l33-14zm61-125c1 3 0 7-3 8s-7 0-8-3l-13-33c-2-3 0-6 3-8 3-1 6 0 8 4l13 32zm26-93c0-4 3-6 6-6s6 2 6 6v88c0 3-3 6-6 6s-6-3-6-6V24zm6 260c41 0 74-33 74-74s-33-74-74-74-74 33-74 74 33 74 74 74z"
        style={{
          fill: "#ffd153",
        }}
      />
      <path
        id="a"
        d="M338 263c0-31-26-57-58-57-10 0-19 2-28 7-7-44-45-78-91-78-52 0-94 41-94 93 0 8 1 15 3 23-2-1-5-1-8-1-20 0-36 16-36 35 0 20 16 36 36 36h218c32 0 58-26 58-58zm-87-12c2-8 3-15 3-23 0-5-1-10-2-15"
        style={{
          stroke: "inherit",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      <use
        xlinkHref="#a"
        id="c"
        style={{
          strokeWidth: 18,
        }}
        transform="matrix(.65 0 0 .65 230 135)"
      />
    </defs>
    <use xlinkHref="#b" />
    <use
      xlinkHref="#c"
      style={{
        stroke: "#fff",
        fill: "#ccc",
      }}
    />
  </svg>
);
export default ClaroNubes;
