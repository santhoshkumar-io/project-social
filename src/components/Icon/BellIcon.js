import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7v.29c2.892.86 5 3.539 5 6.71v5a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2v-5a7.003 7.003 0 0 1 5-6.71V7a2 2 0 1 1 4 0ZM7 19h10v-5a5 5 0 0 0-10 0v5Zm7 2h-4a2 2 0 1 0 4 0Z"
      fill="#8F92A1"
    />
    <circle cx={18} cy={8} r={8} fill="#3D41D7" />
    <path
      d="M17.773 11V6.568l-.92.216V6l1.352-.6h.632V11h-1.064Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
