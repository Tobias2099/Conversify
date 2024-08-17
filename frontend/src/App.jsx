import { useState } from 'react'
import Title from "./Components/Title.jsx"
import Button from "./Components/Button.jsx"
import './Style/App.css'

function App() {

  function levelClick() {
    console.log("clicked");
    button.classList.add("level-clicked");
  }

  return ( 
    <>
      <Title />
      <h2>Select Learning Language</h2>
      <div class="button-container">
        <Button name="English" handleClick={levelClick}/>
        <Button name="French"/>
        <Button name="Spanish"/>
      </div>
      <h2>Select Language Proficiency</h2>
      <div class="button-container">
        <Button name="Beginner"/>
        <Button name="Intermediate"/>
        <Button name="Advanced"/>
      </div>

      <div id="start" class="button-container">
        <Button name="Start" />
      </div>
    </>
  )
}

export default App
