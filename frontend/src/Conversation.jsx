import React from 'react'
import "./Style/Conversation.css"
import Title from "./Components/Title.jsx"
import Button from "./Components/Button.jsx"

function Conversation() {
  return (
    <>
      <div id="banner">
        <Title hasBio={false}/>
        <Button name="Change language" style={{backgroundColor: '#FFC000', border: 'none', width: '18%', marginTop: '-1%', fontSize: '150%', height: '50px'}}/>
      </div>
      
      <div id="convo-btns">
        
      </div>
    </>
  )
}

export default Conversation