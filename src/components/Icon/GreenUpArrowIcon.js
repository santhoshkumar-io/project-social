import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={9}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.192 4.902-.98.975-2.247-2.258-.009 9.393h-1.38l.008-9.37-2.23 2.22-.974-.978L4.295.987l3.897 3.915Z"
      fill="#00875A"
    />
  </svg>
);

export default SvgComponent;
