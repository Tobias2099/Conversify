import React from "react";

function Text({content, isAI}) {
  return (
    <>
      <div class="textbox">
        <p>{content}</p>
      </div>
    </>
  );
}

export default Text;