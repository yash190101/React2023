import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)
  
  let increase = () =>{
    setCounter(counter + 1)
  }

  let decrease = () =>{
    
    setCounter(counter - 1)
  }





  return (
    <>
     <h1>Counter Project</h1>
     <h2>Hello From Yash {counter}</h2>
     <h3>Counter is {counter}</h3>
     <button onClick={increase}>Increase {counter}</button> <hr />
     <button onClick={decrease}>Decrease {counter}</button>
    </>
  )
}

export default App
