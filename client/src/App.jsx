import { useState } from 'react'
import './App.css'
// import Question from './Pages/Question/Question'
import AskQuestion from './Pages/Question/AskQuestion/AskQuestion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AskQuestion/>
 
     
    </>
  )
}

export default App
