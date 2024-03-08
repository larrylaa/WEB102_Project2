import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Trigonometry Essentials For Calculus!</h1>
      <p>How strong are your trigonometry fundamentals? Test or practice your knowledge here!</p>
      <h4>Cards Reviewed: 1</h4>
    </div>

    <div className="centercard">
      <Card></Card>
    </div>


    <div className="centerbutton">
      <button>Back</button>
      <button>Next</button>
    </div>

    </>
  )
}

export default App
