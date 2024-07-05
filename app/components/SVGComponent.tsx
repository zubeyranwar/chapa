"use client";
import * as React from "react";
import { useEffect, useRef } from "react";

const SVGComponent = () => {
  const mainPathRef = useRef(null);
  const arrowHeadLeftRef = useRef(null);
  const arrowHeadTipRef = useRef(null);
  const arrowHeadRightRef = useRef(null);

  useEffect(() => {
    const animatePath = (pathRef: any, duration = 2, delay = 0) => {
      const path = pathRef.current;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // Triggering a reflow to restart the animation
      path.getBoundingClientRect();

      // Adding the animation with delay
      path.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`;
      path.style.strokeDashoffset = "0";
    };

    animatePath(mainPathRef);
    animatePath(arrowHeadLeftRef, 0.5, 2); // delay by 2 seconds
    animatePath(arrowHeadTipRef, 0.5, 2); // delay by 2.5 seconds
    animatePath(arrowHeadRightRef, 0.5, 2); // delay by 3 seconds
  }, []);

  return (
    <svg
      width={127}
      height={106}
      viewBox="0 0 127 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={mainPathRef}
        d="M1.73353 91.9679C1.73353 91.9679 5.45174 79.8055 23.6704 60.5874C37.1724 46.3448 47.7377 41.2828 56.8572 36.9518C65.9767 32.6208 88.1172 28.9825 97.8113 38.3535C105.986 46.2558 101.769 57.6212 94.8387 62.5244C87.9085 67.4275 73.906 66.179 71.9535 50.1679C70.3785 37.2516 78.4878 26.4351 96.3965 20.4588L108.632 16.5111L121.148 13.961"
        stroke="#434E60"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        ref={arrowHeadLeftRef}
        d="M121.637 14.2644L108.428 11.389"
        stroke="#434E60"
        strokeWidth={2}
        strokeLinecap="round"
        style={{ strokeDasharray: "0", strokeDashoffset: "0" }} // Hide initially
      />
      <path
        ref={arrowHeadTipRef}
        d="M121.637 14.2644L115 13"
        stroke="#434E60"
        strokeWidth={2}
        strokeLinecap="round"
        style={{ strokeDasharray: "0", strokeDashoffset: "0" }} // Hide initially
      />
      <g filter="url(#filter0_d_225_6)">
        <path
          ref={arrowHeadRightRef}
          d="M121.637 14.2644L119.338 24.7826"
          stroke="#434E60"
          strokeWidth={2}
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0" }} // Hide initially
        />
      </g>
      <defs>
        <filter
          id="filter0_d_225_6"
          x={114.337}
          y={13.2643}
          width={12.2998}
          height={20.5183}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_225_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_225_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SVGComponent;
