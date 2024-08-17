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
      <div className="customize">
        <h2>Select Learning Language</h2>
        <div className="button-container">
          <Button type="language" name="English" handleClick={levelClick}/>
          <Button type="language" name="French" handleClick={levelClick}/>
          <Button type="language" name="Spanish" handleClick={levelClick}/>
        </div>
      </div>

      <div className="customize">
        <h2>Select Language Proficiency</h2>
        <div className="button-container">
          <Button type="profiency" name="Beginner" handleClick={levelClick}/>
          <Button type="profiency" name="Intermediate" handleClick={levelClick}/>
          <Button type="profiency" name="Advanced" handleClick={levelClick}/>
        </div>
      </div>
      

      <div id="start" className="button-container">
        <Button name="START" style={{fontSize: '250%', height: '80px', border: '3.75px solid', width: '35%'}}/>
      </div>
    </>
  )
}

export default App
