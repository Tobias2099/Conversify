import React from "react";
import "../Style/Button.css"

function Button({handleClick, name, style, type}) {
   return (
    <>
      <button name={name} style={style} onClick={handleClick} type={type}>
        {name}
      </button>
    </>
   )
}

export default Button;