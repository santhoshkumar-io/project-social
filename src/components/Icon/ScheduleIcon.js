import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={6.667} width={3} height={11.333} rx={1.5} fill="#fff" />
    <rect x={7} y={3.333} width={3} height={14.667} rx={1.5} fill="#fff" />
    <rect x={21} y={3.333} width={3} height={14.667} rx={1.5} fill="#fff" />
    <rect x={14} width={3} height={18} rx={1.5} fill="#fff" />
  </svg>
);

export default SvgComponent;
