import { useState } from 'react'
import './App.css'
import Question from './Pages/Question/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Question/>
     
    </>
  )
}

export default App
