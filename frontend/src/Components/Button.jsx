import React from "react";
import "../Style/Button.css"

function Button({handleClick, name, style}) {
   return (
    <>
      <button style={style} onClick={() => handleClick}>
        {name}
      </button>
    </>
   )
}

export default Button;