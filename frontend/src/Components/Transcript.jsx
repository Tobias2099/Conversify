import React from "react";
import "../Style/Transcript.css";
import Text from "./Text.jsx";

function Transcript({conversation}) {
  function process(prompt) {
    const keyword = "Anyways lets continue.";
    const index = prompt.indexOf(keyword);
    if (index !== -1) {
      prompt = prompt.substring(index + keyword.length).trim();
    }
    return prompt;
  }

  return (
    <>
      <div>
        <div id="chat-box">
          {conversation.map((entry, index) => (
            
            <Text key={index} content={process(entry)} isAI={index % 2 === 0? false : true} />
          ))}

        </div>
      </div>
      
    </>
  );
}

export default Transcript;