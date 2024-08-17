import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "./Style/Conversation.css"; 
import Title from "./Components/Title.jsx"; 
import Button from "./Components/Button.jsx"; 

function Conversation() {
  const navigate = useNavigate(); 

  function backClick() { 
    navigate('/');
  }

  return (
    <>
      <div id="banner">
        <Title hasBio={false}/>
        <Button name="Change Settings" style={{backgroundColor: '#FFC000', border: 'none', width: '18%', marginTop: '-1%', fontSize: '150%', height: '50px'}}  handleClick={backClick}/>
      </div>
      
      <div id="convo-btns">
        <Button name="Start Recording"/>
        <Button name="End Conversation" />
        <Button name="Show Transcript" />
      </div>
    </>
  )
}

export default Conversation;