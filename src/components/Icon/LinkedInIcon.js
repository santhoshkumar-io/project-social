import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.59 7.813H0V25h5.59V7.813ZM20.819 8.014c-.06-.019-.116-.039-.178-.056a3.625 3.625 0 0 0-.227-.044 5.011 5.011 0 0 0-1.003-.101c-3.26 0-5.327 2.37-6.008 3.285V7.813h-5.59V25h5.59v-9.375s4.225-5.884 6.008-1.563V25H25V13.402c0-2.597-1.78-4.761-4.181-5.388ZM2.734 5.469a2.734 2.734 0 1 0 0-5.469 2.734 2.734 0 0 0 0 5.469Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
