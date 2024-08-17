import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Title from "./Components/Title.jsx"
import Button from "./Components/Button.jsx"
import './Style/App.css'
import Conversation from "./Conversation.jsx"

function App() {
  const navigate = useNavigate(); 

  function levelClick(event) {
    const buttons = document.querySelectorAll('button');
    const type = event.target.name;
    buttons.forEach((btn) => {
      if (btn.name === type) {
        btn.classList.remove("level-clicked");
      }
    });
    event.target.classList.toggle("level-clicked");
  }

  function startClick() { 
    navigate('/conversation');
  }

  return ( 
    <>
      <Title hasBio={true}/>
      <h2>Select Learning <span>Language</span></h2>
      <div className="button-container">
        <Button type="language" name="English" handleClick={levelClick}/>
        <Button type="language" name="French" handleClick={levelClick}/>
        <Button type="language" name="Spanish" handleClick={levelClick}/>
      </div>
      <h2>Select Language <span>Proficiency</span></h2>
      <div className="button-container">
        <Button type="profiency" name="Beginner" handleClick={levelClick}/>
        <Button type="profiency" name="Intermediate" handleClick={levelClick}/>
        <Button type="profiency" name="Advanced" handleClick={levelClick}/>
      </div>
      

      <div id="start" className="button-container">
        <Button name="START" style={{fontSize: '250%', height: '90px', border: '5px solid #FFC000', width: '35%', borderRadius: '15% / 100%', display: 'block'}} handleClick={startClick}/>
        <div id ="start-decoration"></div>
      </div>
    </>
  )
}

export default App
