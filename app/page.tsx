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
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/14426316/pexels-photo-14426316.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/19149193/pexels-photo-19149193/free-photo-of-cup-of-cocoa-drink-and-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1000",
    ];
    const [rotation, setRotation] = useState(0);
    const rotationStep = 360 / images.length; // Adjust this value to control the rotation speed
    useEffect(() => {
      const handleWheel = (event: React.WheelEvent) => {
        // Increment or decrement the rotation based on the scroll direction
        setRotation(
          (prevRotation) =>
            prevRotation + (event.deltaY < 0 ? rotationStep : -rotationStep)
        );
      };
      document
        .getElementById("anchor")
        ?.addEventListener("wheel", handleWheel as any);

      // Remove event listener on component unmount
      return () => {
        document
          .getElementById("anchor")
          ?.removeEventListener("wheel", handleWheel as any);
      };
    }, []);

    return (
      <main>
        <div className="bg-slate-900 h-screen"></div>
        <div id="track" className="bg-slate-700 relative h-[200vh]">
          <div
            id="anchor"
            className=" min-h-screen w-full bg-slate-800 top-0 sticky overflow-hidden"
          >
            {images.map((imageUrl, index) => (
              <div
                id="card"
                key={`item${index}`}
                className="w-72 h-96 absolute  top-[1344px] left-1/2 transition-transform duration-300 ease-in-out"
                style={{
                  transformOrigin: "top left",
                  transform: `rotate(${
                    rotation + index * (360 / images.length)
                  }deg) translate( -50%, -350%)`,
                }}
              >
                <p className="absolute font-bold text-9xl  text-white bg-black p-4 rounded-3xl top-1/3 text-center -left-10">
                  {index + 1}
                </p>
                <img
                  src={imageUrl}
                  className="object-cover rounded-3xl w-full h-full"
                  alt={`item${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 h-screen"></div>
      </main>
    );
  };

  return <Card />;
}
