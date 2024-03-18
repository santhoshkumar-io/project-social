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
      d="M9 4a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5V5a1 1 0 0 0-1-1H9ZM8 18v-6H4v6h4Zm2 0h4V6h-4v12Zm10 0h-4v-8h4v8Z"
      fill="#D3D3FD"
    />
  </svg>
);

export default SvgComponent;
