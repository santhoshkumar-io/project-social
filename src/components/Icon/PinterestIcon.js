import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={27}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.952 0C4.844 0 0 5.796 0 12.116c0 2.93 1.65 6.585 4.29 7.745.4.18.618.103.707-.266.08-.28.426-1.632.595-2.27a.58.58 0 0 0-.142-.573c-.876-1.006-1.572-2.84-1.572-4.56 0-4.408 3.529-8.688 9.534-8.688 5.192 0 8.825 3.35 8.825 8.141 0 5.415-2.885 9.16-6.634 9.16-2.075 0-3.62-1.617-3.13-3.617.592-2.383 1.753-4.944 1.753-6.663 0-1.54-.877-2.815-2.667-2.815-2.112 0-3.826 2.077-3.826 4.866 0 1.771.631 2.968.631 2.968s-2.09 8.382-2.478 9.948c-.656 2.65.09 6.942.154 7.311.04.205.27.269.399.102.206-.269 2.731-3.847 3.44-6.434.257-.942 1.314-4.764 1.314-4.764C11.89 22.955 13.898 24 16.037 24 22.401 24 27 18.446 27 11.553 26.977 4.944 21.282 0 13.952 0Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
