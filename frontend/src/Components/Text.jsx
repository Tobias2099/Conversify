import React from "react";

function Text({content, isAI}) {
  const textStyle = isAI? {
    backgroundColor: '#ffc516', /* Light blue background for AI messages */
    alignSelf: 'flex-start' /* Align to the left */
  } : {
    backgroundColor: '#89CFF0', /* Light yellow background for user messages */
    alignSelf: 'flex-end' /* Align to the right */
  }

  const message = isAI? content.substring(4) : content.substring(6);
  return (
    <>
      <div className="textbox" style={textStyle}>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Text;

