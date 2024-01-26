import * as React from "react";
const DiaClaro = (props) => (
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
        id="a"
        d="M376 338c2 2 2 6 0 8-3 2-6 2-9 0l-62-63c-2-2-2-6 0-8s6-2 8 0l63 63zM175 137c2 2 2 6 0 8s-6 2-8 0l-63-63c-2-2-2-6 0-8 3-2 6-2 9 0l62 63zm251 67c4 0 6 3 6 6s-2 6-6 6h-88c-4 0-6-3-6-6s2-6 6-6h88zm-284 0c4 0 6 3 6 6s-2 6-6 6H54c-4 0-6-3-6-6s2-6 6-6h88zM367 74c3-2 6-2 9 0 2 2 2 6 0 8l-63 63c-2 2-6 2-8 0s-2-6 0-8l62-63zM167 275c2-2 6-2 8 0s2 6 0 8l-62 63c-3 2-6 2-9 0-2-2-2-6 0-8l63-63zm198-19c4 1 5 4 4 7-2 3-5 5-8 4l-33-14c-3-1-4-5-3-8s5-4 8-3l32 14zm-213-89c3 2 4 5 3 8s-5 4-8 3l-33-14c-3-1-4-4-3-7s5-5 8-3l33 13zm134-83c1-3 4-4 7-3s5 5 3 8l-13 33c-1 3-5 4-8 3s-4-5-3-8l14-33zm-89 214c1-3 5-4 8-3s4 5 3 8l-14 33c-1 3-4 4-7 3s-5-5-4-8l14-33zm164-144c3-2 6 0 8 3 1 3-1 6-4 7l-32 14c-3 1-7 0-8-3s0-7 3-8l33-13zm-214 88c3-1 7 0 8 3s0 7-3 8l-33 14c-3 1-6-1-8-4-1-3 0-6 3-7l33-14zm149 89c2 3 0 7-3 8s-6 0-7-3l-14-33c-1-3 0-7 3-8s7 0 8 3l13 33zm-88-214c1 3 0 7-3 8s-7 0-8-3l-13-33c-2-3 0-6 3-8 3-1 6 0 8 4l13 32zm26-93c0-4 3-6 6-6s6 2 6 6v88c0 3-3 6-6 6s-6-3-6-6V24zm0 284c0-3 3-6 6-6s6 3 6 6v88c0 4-3 6-6 6s-6-2-6-6v-88zm6-24c41 0 74-33 74-74s-33-74-74-74-74 33-74 74 33 74 74 74z"
        style={{
          fill: "#ffd153",
        }}
      />
    </defs>
    <use xlinkHref="#a" />
  </svg>
);
export default DiaClaro;
