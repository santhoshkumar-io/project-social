import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.5a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7.5a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.5a1 1 0 0 1 1-1H21a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-7.5a1 1 0 0 1-1-1V1Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
