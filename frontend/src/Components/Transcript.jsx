import React from "react";

function Transcript({conversation}) {
  return (
    <>
      <div id="transcript-container">

        {conversation.map((entry, index) => (
          <Text key={index} content={entry} isAI={index % 2 === 0? false : true} />
        ))}

      </div>
    </>
  );
}

export default Transcript;