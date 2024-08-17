import React from "react";

function Title({hasBio}) {

  const bannerStyle = {
    backgroundImage: "linear-gradient(to right, #002D62, #0066b2, #172D9D, #2a52be, #787CFE)",
    color: '#F8F3EA',             // White text color
    textAlign: 'center',        // Center align text
    padding: '20px',            // Add some padding
    fontSize: '6.5em',            // Large font size
    fontFamily: 'Arial, Calibri, sans-serif', // Font style
    fontWeight: 'bold',
    paddingTop: '3%',
    paddingBottom: '3%',
    margin: '-1%',
    borderBottom: '5px solid #FFC000',
    width: '100%',
  }

  const bioStyle = { 
    color: '#D1E8FF',             // Light blue text color
    fontSize: '20px',           // Smaller font size
    marginTop: '10px',          // Space between title and bio
    fontStyle: 'italic'
  }

  const hidden = {
    display: 'none'
  }

  const titleStyle = {
    textShadow: '2px 2px 0 #FFC000, -1px -1px 0 #FFC000, 1px -1px 0 #FFC000, -1px 1px 0 #FFC000', /* Border color and size */
  }

  return (
    <div style={bannerStyle}>
        <div id="title" style={titleStyle}>Conversify</div> 
        <div style={hasBio? bioStyle : hidden}>
            Your personal language conversation partner! <br/> 
            Record your speech, and let our AI spark dynamic conversations that boost your fluency. <br/> 
            Perfect your accent, expand your vocabulary, and practice anytime, anywhere. <br/> 
        </div>
    </div>
  );

}

export default Title;