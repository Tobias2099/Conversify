import React from "react";
import "../Style/Transcript.css";
import Text from "./Text.jsx";

function Transcript({conversation}) {
  return (
    <>
      <div>
        <div id="chat-box">
          {conversation.map((entry, index) => (
            <Text key={index} content={entry} isAI={index % 2 === 0? false : true} />
          ))}

        </div>
      </div>
      
    </>
  );
}

export default Transcript;