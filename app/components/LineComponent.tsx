"use client";
import * as React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

const LineComponent: React.FC = () => {
  const mainPathRef = useRef<SVGPathElement | null>(null);
  const marker1Ref = useRef<SVGPathElement | null>(null);
  const marker2Ref = useRef<SVGPathElement | null>(null);
  const marker3Ref = useRef<SVGPathElement | null>(null);
  const marker4Ref = useRef<SVGPathElement | null>(null);

  const marker1ImageRef = useRef<HTMLImageElement | null>(null);
  const marker2ImageRef = useRef<HTMLImageElement | null>(null);
  const marker3ImageRef = useRef<HTMLImageElement | null>(null);
  const marker4ImageRef = useRef<HTMLImageElement | null>(null);

  const marker1TextRef = useRef<HTMLDivElement | null>(null);
  const marker2TextRef = useRef<HTMLDivElement | null>(null);
  const marker3TextRef = useRef<HTMLDivElement | null>(null);
  const marker4TextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animatePath = (
      pathRef: React.MutableRefObject<SVGPathElement | null>,
      imageRef: React.MutableRefObject<HTMLImageElement | null> | null,
      textRef: React.MutableRefObject<HTMLDivElement | null> | null,
      duration = 2,
      delay = 0
    ) => {
      const path = pathRef.current;
      if (!path) return; // Check if ref is assigned

      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);

      // Triggering a reflow to restart the animation
      path.getBoundingClientRect();

      // Adding the animation with delay
      path.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`;
      path.style.strokeDashoffset = "0";
      path.style.opacity = "1";

      // Show the respective image when animation ends
      if (imageRef) {
        setTimeout(() => {
          const image = imageRef.current;
          if (image) {
            image.style.opacity = "1";
          }
        }, (duration + delay) * 1000); // Convert seconds to milliseconds
      }

      // Show the respective text when animation ends
      if (textRef) {
        setTimeout(() => {
          const text = textRef.current;
          if (text) {
            text.style.opacity = "1";
          }
        }, (duration + delay) * 1000); // Convert seconds to milliseconds
      }
    };

    // Animate the main horizontal path first
    animatePath(mainPathRef, null, null, 2); // Pass null for imageRef and textRef here

    // Animate the markers one by one after the main path
    const markerDuration = 1; // Slower animation for markers
    const markerDelay = 2; // Delay after the main path is completed

    animatePath(
      marker1Ref,
      marker1ImageRef,
      marker1TextRef,
      markerDuration,
      markerDelay
    );
    animatePath(
      marker2Ref,
      marker2ImageRef,
      marker2TextRef,
      markerDuration,
      markerDelay + 0.5
    ); // delay by 0.5 seconds more
    animatePath(
      marker3Ref,
      marker3ImageRef,
      marker3TextRef,
      markerDuration,
      markerDelay + 1
    ); // delay by 1 second more
    animatePath(
      marker4Ref,
      marker4ImageRef,
      marker4TextRef,
      markerDuration,
      markerDelay + 1.5
    ); // delay by 1.5 seconds more
  }, []);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <svg
        width="218"
        height="40" // Adjust height to accommodate images above lines
        viewBox="0 0 218 40" // Adjust viewBox accordingly
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={mainPathRef}
          d="M1 35H217"
          stroke="#434E60"
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0", opacity: "0" }} // Hide initially
        />
        <path
          ref={marker1Ref}
          d="M20 35V20"
          stroke="#434E60"
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0", opacity: "0" }} // Hide initially
        />
        <path
          ref={marker2Ref}
          d="M77 35V20"
          stroke="#434E60"
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0", opacity: "0" }} // Hide initially
        />
        <path
          ref={marker3Ref}
          d="M134 35V20"
          stroke="#434E60"
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0", opacity: "0" }} // Hide initially
        />
        <path
          ref={marker4Ref}
          d="M191 35V20"
          stroke="#434E60"
          strokeLinecap="round"
          style={{ strokeDasharray: "0", strokeDashoffset: "0", opacity: "0" }} // Hide initially
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "0", // Adjust top position to align text
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "8px", // Set font size for text
        }}
      >
        <div
          style={{ position: "relative", textAlign: "center", width: "25%" }}
        >
          <Image
            src="/bag.svg"
            alt="Bag"
            width={20}
            height={20}
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "relative",
              top: "-4px",
              left: "10px",
            }}
            ref={marker1ImageRef}
          />
          <div
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "absolute",
              top: "40px",
              left: "30%",
              transform: "translateX(-50%)",
              fontWeight: "700",
              color: "#0D1B34",
            }}
            ref={marker1TextRef}
          >
            Buy
          </div>
        </div>
        <div
          style={{ position: "relative", textAlign: "center", width: "25%" }}
        >
          <Image
            src="/lock.svg"
            alt="Lock"
            width={20}
            height={20}
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "relative",
              top: "-4px",
            }}
            ref={marker2ImageRef}
          />
          <div
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "absolute",
              top: "40px",
              left: "12%",
              transform: "translateX(-50%)",
              fontWeight: "700",
              color: "#0D1B34",
            }}
            ref={marker2TextRef}
          >
            Secured
          </div>
        </div>
        <div
          style={{ position: "relative", textAlign: "center", width: "25%" }}
        >
          <Image
            src="/processing.svg"
            alt="Processing"
            width={20}
            height={20}
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "relative",
              top: "-4px",
              left: "-12px",
            }}
            ref={marker3ImageRef}
          />
          <div
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "absolute",
              top: "40px",
              left: "2%",
              transform: "translateX(-50%)",
              fontWeight: "700",
              color: "#0D1B34",
            }}
            ref={marker3TextRef}
          >
            Processing
          </div>
        </div>
        <div
          style={{ position: "relative", textAlign: "center", width: "25%" }}
        >
          <Image
            src="/success.svg"
            alt="Success"
            width={20}
            height={20}
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "relative",
              top: "-4px",
              left: "-25px",
            }}
            ref={marker4ImageRef}
          />
          <div
            style={{
              opacity: "0",
              transition: "opacity 0.5s ease",
              position: "absolute",
              top: "40px",
              left: "-20%",
              transform: "translateX(-50%)",
              fontWeight: "700",
              color: "#0D1B34",
            }}
            ref={marker4TextRef}
          >
            Success
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineComponent;
