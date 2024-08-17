import React from "react";


function Title() {
  const titleStyle = {
    backgroundColor: '#0B1957', // Dark blue background
    color: '#F8F3EA',             // White text color
    textAlign: 'center',        // Center align text
    padding: '20px',            // Add some padding
    fontSize: '5em',            // Large font size
    fontFamily: 'Calibri, sans-serif', // Font style
    fontWeight: 'bold',

  }

  const bioStyle = { 
    color: '#D1E8FF',             // Light blue text color
    fontSize: '20px',           // Smaller font size
    marginTop: '10px'          // Space between title and bio
  }

  return (
    <div style={titleStyle}>
        <div>Conversify</div>
        <div style={bioStyle}>
            Your personal language conversation partner! <br/> 
            Record your speech, and let our AI spark dynamic conversations that boost your fluency. <br/> 
            Perfect your accent, expand your vocabulary, and practice anytime, anywhere. <br/> 
        </div>
    </div>
  );

}

export default Title;