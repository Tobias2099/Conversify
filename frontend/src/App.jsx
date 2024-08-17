import { useState } from 'react'
import Title from "./Components/Title.jsx"
import Button from "./Components/Button.jsx"
import './Style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <Title />
      <h2>Select Learning Language</h2>
      <div class="button-container">
        <Button name="English"/>
        <Button name="French"/>
        <Button name="Spanish"/>
      </div>
      <h2>Select Proficiency</h2>
      <div class="button-container">
        <Button name="Beginner"/>
        <Button name="Intermediate"/>
        <Button name="Advanced"/>
      </div>
    </>
  )
}

export default App
