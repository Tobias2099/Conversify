import React from "react";

function Text({content, isAI}) {
  const textStyle = isAI? {
    backgroundColor: '#f8d7da', /* Light red background for AI messages */
    alignSelf: 'flex-start' /* Align to the left */
  } : {
    backgroundColor: '#d1e7dd', /* Light green background for user messages */
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

