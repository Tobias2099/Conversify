import React from "react";
import "../Style/Button.css"

function Button({handleClick, name}) {
   return (
    <>
      <button>
        {name}
      </button>
    </>
   )
}

export default Button;