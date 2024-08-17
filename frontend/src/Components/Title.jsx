import React from "react";


function Title() {
  const titleStyle = {
    backgroundColor: "#0B1957", //Dark blue background 
    color: '#F8F3EA',          //white text colour 
    textAlign: 'center', 
    padding: '20px', 
    fontSize: '2em',
  }

  return (
    <div style = {titleStyle}>
        Conversify
    </div>
  ); 

}

export default Title;