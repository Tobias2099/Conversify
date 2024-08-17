import React from "react";
import "../Style/AudioIcon.css";

function AudioIcon({ amplitude, isRecording }) {
  const size = 200 + amplitude;
  
  return (
    <div
      className={`audio-icon ${isRecording ? 'animate' : ''}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle, #002D62, #0066b2, #172D9D, #2a52be, #787CFE)',
        borderRadius: '50%',
        transition: 'width 0.1s, height 0.1s',
      }}
    >
      <div className={`wave ${isRecording ? 'animate-wave' : ''}`}></div>
    </div>
  );
}

export default AudioIcon;