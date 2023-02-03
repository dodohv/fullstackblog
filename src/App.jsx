import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Meu blog incrível</h1>
      <div id="page-body">
        Bem vindo ao meu blog!
      </div>
    </div>
  )
}

export default App
