import React from "react";
import "../Style/Button.css"

function Button({handleClick, name, type, style}) {
   return (
    <>
      <button name={type} style={style} onClick={handleClick}>
        {name}
      </button>
    </>
   )
}

export default Button;