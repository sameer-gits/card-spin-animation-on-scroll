"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const Card = () => {
    const handleWheel = (event: React.WheelEvent) => {
      // Increment or decrement the rotation based on the scroll direction
      setRotation(
        (prevRotation) =>
          prevRotation + (event.deltaY < 0 ? rotationStep : -rotationStep)
      );
    };

    useEffect(() => {
      // Add event listener for wheel scroll
      document.getElementById("anchor").addEventListener("wheel", handleWheel);

      // Remove event listener on component unmount
      return () => {
        document
          .getElementById("anchor")
          .removeEventListener("wheel", handleWheel);
      };
    }, []);

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
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000",
    ];
    const [rotation, setRotation] = useState(0);
    const rotationStep = 360 / images.length; // Adjust this value to control the rotation speed
    return (
      <main>
        <div
          id="anchor"
          className="h-[700px] w-full relative overflow-hidden border-2 border-blue-400 "
        >
          {images.map((imageUrl, index) => (
            <div
              key={`item${index}`}
              className="w-72 h-96 absolute rounded-3xl overflow-hidden top-[215%] left-1/2 border-2 transition-transform duration-300 ease-in-out"
              style={{
                transformOrigin: "top left",
                transform: `rotate(${
                  rotation + index * (360 / images.length)
                }deg) translate( -50%, -350%)`,
              }}
            >
              <img
                src={imageUrl}
                className="object-cover w-full h-full"
                alt={`item${index + 1}`}
              />
            </div>
          ))}
        </div>
      </main>
    );
  };

  return <Card />;
}
