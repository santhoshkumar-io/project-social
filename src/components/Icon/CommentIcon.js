import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.028 2c-5.523 0-10 4.477-10 10a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09 1 1 0 0 0 .95.58h9c5.523 0 10-4.477 10-10s-4.477-10-10-10Zm0 18h-6.59l.93-.93a1 1 0 0 0 0-1.41 8 8 0 1 1 5.66 2.34Z"
      fill="#D3D3FD"
    />
  </svg>
);

export default SvgComponent;
