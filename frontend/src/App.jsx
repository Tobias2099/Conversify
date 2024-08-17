import { useState } from 'react'
import Title from "./Components/Title.jsx"
import Button from "./Components/Button.jsx"
import './Style/App.css'

function App() {

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

  return ( 
    <>
      <Title />
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
        <Button name="START" style={{fontSize: '250%', height: '90px', border: '5px solid #FFC000', width: '35%', borderRadius: '15% / 100%', display: 'block'}}/>
        <div id ="start-decoration"></div>
      </div>
    </>
  )
}

export default App
