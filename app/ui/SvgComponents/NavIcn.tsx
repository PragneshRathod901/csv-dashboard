import * as React from "react";
import { SVGProps } from "react";

const NavIcn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 4.667v18.666m5.833-11.666L18.667 14l-2.334 2.333M4.667 7A2.333 2.333 0 0 1 7 4.667h14A2.333 2.333 0 0 1 23.333 7v14A2.333 2.333 0 0 1 21 23.333H7A2.333 2.333 0 0 1 4.667 21V7Z"
    />
  </svg>
);
export default NavIcn;
