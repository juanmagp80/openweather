import * as React from "react";
const DiaClaro = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    style={{
      whiteSpace: "pre",
    }}
    textRendering="geometricPrecision"
    viewBox="0 0 64 64"
    width={70}
    height={70}
    {...props}
  >
    <style>
      {
        "@keyframes a0_t{0%{transform:translate(32px,32px) scale(1,1) translate(-14.7px,-14.7px);animation-timing-function:cubic-bezier(.86,0,.07,1)}50%{transform:translate(32px,32px) scale(.7,.7) translate(-14.7px,-14.7px);animation-timing-function:cubic-bezier(.86,0,.07,1)}to{transform:translate(32px,32px) scale(1,1) translate(-14.7px,-14.7px)}}@keyframes a1_t{0%{transform:translate(32px,32px) rotate(0deg) translate(-14.7px,-14.7px)}to{transform:translate(32px,32px) rotate(360deg) translate(-14.7px,-14.7px)}}@keyframes a1_o{0%{opacity:1;animation-timing-function:cubic-bezier(.445,.05,.55,.95)}50%{opacity:.2;animation-timing-function:cubic-bezier(.445,.05,.55,.95)}to{opacity:1}}"
      }
    </style>
    <circle r={8.7} fill="#FFCE55" transform="translate(32 32)" />
    <circle
      r={5.7}
      fill="#FFAF57"
      style={{
        animation: "3s linear infinite both a0_t",
      }}
      transform="translate(32 32)"
    />
    <g
      style={{
        animation: "3s linear infinite both a1_t,3s linear infinite both a1_o",
      }}
      transform="translate(17.3 17.3)"
    >
      <circle r={1.7} fill="#FFCE55" transform="translate(14.7 1.7)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(14.7 27.7)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(1.7 14.7)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(27.7 14.7)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(5.5 5.5)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(23.9 23.9)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(5.5 23.9)" />
      <circle r={1.7} fill="#FFCE55" transform="translate(23.9 5.5)" />
    </g>
  </svg>
);
export default DiaClaro;
