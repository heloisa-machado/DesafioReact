import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './Components/FirstComponent'
import TemplateExpressions from './Components/TemplateExpressions'
import MyComponent from './Components/MyComponent'
import Events from './Components/Events'
import Challenge from './Components/Challenge'
import FinalChallenge from './Components/FinalChallenge'
import Calculo from './Components/Caclulo'

function App() {
  const [count, setCount] = useState(0)
  const [num1, num2] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <MyComponent />
        <Events />
        <Challenge />
        <FinalChallenge x={10} y={2} />
        <FinalChallenge x={6} y={3} />
        <FinalChallenge x={5} y={4} />
        <h6>Digite um número:</h6> 
        <input type="number" id='num1in' />
        <input type="number" id='num2in'/> 
        <Calculo a={num1} b={num2} />
      </div>
    </>
  )
}

export default App
