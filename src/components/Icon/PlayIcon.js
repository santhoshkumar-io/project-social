import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 14.132V1.869a1 1 0 0 1 1.555-.833l9.197 6.132a1 1 0 0 1 0 1.664l-9.197 6.131A1 1 0 0 1 0 14.133Z"
      fill="#3D41D7"
    />
  </svg>
);

export default SvgComponent;
