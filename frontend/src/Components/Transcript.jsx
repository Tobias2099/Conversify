import React from "react";

function Transcript({conversation}) {
  let isAI = false;
  return (
    <>
      <div id="transcript-container">

        {conversation.map((entry) => {
          <Text content={entry} />
        })}

      </div>
    </>
  );
}

export default Transcript;