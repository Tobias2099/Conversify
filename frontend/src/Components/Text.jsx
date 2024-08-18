import React from "react";

function Text({content, isAI}) {
  const textStyle = isAI? {
    backgroundColor: '#ffc516', /* Light yellow background for AI messages */
    alignSelf: 'flex-start', /* Align to the left */
    maxWidth: '50%',
    borderRadius: '8px',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginLeft: '1%',
    fontFamily: 'Arial, Calibri, sans-serif'
  } : {
    backgroundColor: '#89CFF0', /* Light blue background for user messages */
    alignSelf: 'flex-end', /* Align to the right */
    maxWidth: '50%',
    borderRadius: '8px',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginRight: '1%',
    fontFamily: 'Arial, Calibri, sans-serif'
  }

  const message = isAI? content.substring(4) : (content.substring(0,6) === "User: " ? content.substring(6) : content);
  return (
    <>
      <div className="textbox" style={textStyle}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Text;

