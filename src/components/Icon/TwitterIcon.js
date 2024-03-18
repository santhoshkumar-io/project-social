import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={29}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29 2.723a12.633 12.633 0 0 1-3.426.916A5.798 5.798 0 0 0 28.19.432a12.059 12.059 0 0 1-3.77 1.404A6.026 6.026 0 0 0 20.077 0c-3.291 0-5.941 2.608-5.941 5.805 0 .46.04.902.137 1.323A16.967 16.967 0 0 1 2.02 1.058a5.737 5.737 0 0 0-.814 2.933c0 2.01 1.06 3.792 2.641 4.823A5.982 5.982 0 0 1 1.16 8.1v.063c0 2.82 2.06 5.163 4.763 5.703a6.073 6.073 0 0 1-1.559.19c-.38 0-.764-.02-1.125-.098.77 2.298 2.956 3.987 5.555 4.042a12.133 12.133 0 0 1-7.371 2.475c-.488 0-.955-.02-1.423-.08C2.634 22.055 5.755 23 9.12 23c10.94 0 16.922-8.846 16.922-16.514 0-.257-.01-.504-.022-.75A11.71 11.71 0 0 0 29 2.723Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;