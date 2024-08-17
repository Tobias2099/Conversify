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

      <h2>Select Learning Language</h2>
      <div className="button-container">
        <Button type="language" name="English" handleClick={levelClick}/>
        <Button type="language" name="French" handleClick={levelClick}/>
        <Button type="language" name="Spanish" handleClick={levelClick}/>
      </div>

      <h2>Select Language Proficiency</h2>
      <div className="button-container">
        <Button type="profiency" name="Beginner" handleClick={levelClick}/>
        <Button type="profiency" name="Intermediate" handleClick={levelClick}/>
        <Button type="profiency" name="Advanced" handleClick={levelClick}/>
      </div>

      <div id="start" className="button-container">
        <Button name="Start" style={{fontSize: '200%', height: '70px', border: '3.5px solid', width: '30%'}}/>
      </div>
    </>
  )
}

export default App
