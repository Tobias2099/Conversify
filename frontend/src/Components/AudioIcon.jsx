import React from "react";
import "../Style/AudioIcon.css";

function AudioIcon({ amplitude }) {
  const size = 200 + amplitude;
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: 'green',
      borderRadius: '50%',
      transition: 'width 0.1s, height 0.1s'
    }}>
    </div>
  );
}

export default AudioIcon;