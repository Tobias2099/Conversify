import React from "react";
import "../Style/Button.css"

function Button({handleClick, name, style, type}) {
   return (
    <>
      <button name={type} style={style} onClick={handleClick}>
        {name}
      </button>
    </>
   )
}

export default Button;