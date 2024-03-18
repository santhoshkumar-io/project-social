import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={10}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.032.017.757 4.227l1.404 1.425 1.858-1.83-.055 18.155 2 .006L6.02 3.87l1.798 1.825 1.425-1.403L5.032.017Z"
      fill="#323484"
    />
  </svg>
);

export default SvgComponent;
