"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const Card = () => {
    const images = [
      "https://images.pexels.com/photos/6875562/pexels-photo-6875562.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/13221799/pexels-photo-13221799.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19187317/pexels-photo-19187317/free-photo-of-hidden.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/6875562/pexels-photo-6875562.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/13221799/pexels-photo-13221799.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19187317/pexels-photo-19187317/free-photo-of-hidden.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/13221799/pexels-photo-13221799.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19187317/pexels-photo-19187317/free-photo-of-hidden.jpeg?auto=compress&cs=tinysrgb&w=1000",
    ];

    const [rotation, setRotation] = useState(0);
    const rotationStep = 360 / images.length; // Adjust this value to control the rotation speed
    let isDragging = false;
    let startX = 0;
    const dragThreshold = 5; // Adjust this value to control the dragging threshold
    const draggingTimeout = 200; // Adjust this value to set the timeout duration
    let dragTimeoutId: NodeJS.Timeout | null = null;

    useEffect(() => {
      const handleWheel = (event: React.WheelEvent) => {
        // Increment or decrement the rotation based on the scroll direction
        setRotation(
          (prevRotation) =>
            prevRotation + (event.deltaY < 0 ? rotationStep : -rotationStep)
        );
      };

      const handlePointerDown = (event: React.PointerEvent) => {
        isDragging = true;
        startX = event.clientX;
      };

      const handlePointerMove = (event: React.PointerEvent) => {
        if (isDragging) {
          const deltaX = event.clientX - startX;

          if (Math.abs(deltaX) > dragThreshold) {
            event.preventDefault();

            // Check if the timeout is not active
            if (!dragTimeoutId) {
              setRotation(
                (prevRotation) =>
                  prevRotation + (deltaX > 0 ? rotationStep : -rotationStep)
              );

              startX = event.clientX; // Update the start position for continuous dragging

              // Set a timeout to prevent frequent dragging
              dragTimeoutId = setTimeout(() => {
                dragTimeoutId = null;
              }, draggingTimeout);
            }
          }
        }
      };

      const handlePointerUp = () => {
        isDragging = false;
        if (dragTimeoutId) {
          clearTimeout(dragTimeoutId);
          dragTimeoutId = null;
        }
      };

      const anchorElement = document.getElementById("anchor");

      if (anchorElement) {
        anchorElement.addEventListener("wheel", handleWheel as any);
        anchorElement.addEventListener("pointerdown", handlePointerDown as any);
        anchorElement.addEventListener("pointermove", handlePointerMove as any);
        anchorElement.addEventListener("pointerup", handlePointerUp);
      }

      // Remove event listeners on component unmount
      return () => {
        if (anchorElement) {
          anchorElement.removeEventListener("wheel", handleWheel as any);
          anchorElement.removeEventListener(
            "pointerdown",
            handlePointerDown as any
          );
          anchorElement.removeEventListener(
            "pointermove",
            handlePointerMove as any
          );
          anchorElement.removeEventListener("pointerup", handlePointerUp);
        }

        // Clear the timeout on component unmount
        if (dragTimeoutId) {
          clearTimeout(dragTimeoutId);
          dragTimeoutId = null;
        }
      };
    }, [rotationStep, dragThreshold, draggingTimeout]);
    return (
      <main>
        <div id="track" className="bg-black relative">
          <div
            id="anchor"
            className=" min-h-screen w-full  top-0 sticky overflow-hidden"
          >
            {images.map((imageUrl, index) => (
              <>
                <div
                  id="card"
                  key={`item${index}`}
                  className="w-72 h-96 absolute group/item top-[1544px] left-1/2 transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing select-none"
                  style={{
                    transformOrigin: "top left",
                    transform: `rotate(${
                      rotation + index * (360 / images.length)
                    }deg) translate( -50%, -350%)`,
                  }}
                >
                  <a
                    href={imageUrl}
                    className="bg-black text-white absolute uppercase tracking-wider bottom-0 opacity-0 group-hover/item:opacity-100 transition-opacity -translate-x-1/2 left-1/2 py-4 w-full text-center rounded-b-3xl shadow-2xl font-black"
                  >
                    Hello World
                  </a>
                  <img
                    src={imageUrl}
                    className="object-cover rounded-3xl w-full h-full pointer-events-none select-none"
                    alt={`item${index}`}
                  />
                  <p className="absolute m-0 p-0 -z-10 font-bold text-6xl tracking-tighter rounded-3xl text-gradient-custom -top-12 translate-x-1/2 right-1/2 select-none pointer-events-none">
                    {index + 2001}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    );
  };

  return <Card />;
}
