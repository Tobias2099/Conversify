import React from "react";

function Title() {

  /*const bannerStyle = { 
    backgroundImage: 'url(./Banner.png)', // Path to your image
    backgroundSize: 'cover',      // Cover the entire banner area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
    border: 'none',
    padding: '0',
    margin: '0',
    boxShadow: 'none',
    display: 'block',            // Ensure the banner is displayed as a block element
    width: '100%',               // Ensure the banner takes full width if needed
    height: 'auto',              // Adjust height if necessary
  }*/

  const titleStyle = {
    //backgroundColor: '#0B1957', // Dark blue background
    backgroundImage: "linear-gradient(to right, #002D62, #0066b2, #172D9D, #2a52be, #787CFE)",
    color: '#F8F3EA',             // White text color
    textAlign: 'center',        // Center align text
    padding: '20px',            // Add some padding
    fontSize: '5em',            // Large font size
    fontFamily: 'Arial, Calibri, sans-serif', // Font style
    fontWeight: 'bold',
    padding: '3%',
    margin: '-1%',
    marginBottom: '4%'
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