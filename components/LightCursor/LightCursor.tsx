"use client"
import React, { useState, useEffect, MouseEvent } from "react";
import "./LightCursor.css";

const LightCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const handleBodyMouseMove = (event: any) => {
        handleMouseMove(event);
      };
    document.body.addEventListener("mousemove", handleBodyMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleBodyMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="light-cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>

    </div>
  );
};

export default LightCursor;