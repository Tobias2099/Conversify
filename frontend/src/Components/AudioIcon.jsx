import React from "react";
import "../Style/AudioIcon.css"

function AudioIcon({ amplitude }) {
  const size = 250 + (amplitude * 1.5);
  const dimension = 190 + amplitude * 1.5;

  // Calculate a shade of blue based on amplitude
  // Assuming amplitude is between 0 and 255 (or scale accordingly)
  const blueShade = Math.min(255, Math.max(0, amplitude)); // Clamp the value between 0 and 255
  const gradientColor = `radial-gradient(circle, #002D62, #172D9D, #2a52be, #0066b2, #787CFE)`; // Gradient effect
  
  return (
    <div id="icon" style={{
      width: `${size}px`,
      height: `${size}px`,
      background: gradientColor,
      borderRadius: '50%',
      transition: 'width 0.1s, height 0.1s, background 0.1s',
      boxShadow: `0 0 ${size / 2}px rgba(0, 0, ${blueShade}, 0.5)`, // Glow effect
      transform: `scale(${1 + amplitude / 500})`, // Scale effect
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img 
        alt="speaker emoji" 
        src="https://cdn-icons-png.freepik.com/512/3871/3871719.png" 
        width={dimension} 
        height={dimension} 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.8,
          filter: `drop-shadow(0 0 ${size / 10}px rgba(0, 0, ${blueShade}, 0.8))` // Shadow on image
        }}
      />
    </div>
  );
}

export default AudioIcon;