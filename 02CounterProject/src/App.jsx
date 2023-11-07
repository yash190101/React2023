import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setCounter ] = useState(10)

  const increase = () => {
    if (counter < 20) {
      counter++
      setCounter(counter)
    }
  }

  const decrease = () => {
    if (counter > 0) {
      counter--
      setCounter(counter)  
    }
    
  }

  return (
    <>
      
      <h1>Hello From Yash</h1>
      <h2>Counter value is {counter}</h2>
      <button onClick = {increase} >Increase {counter}</button> <hr />
      <button onClick = {decrease} >Decrease {counter}</button>
    </>
  )
}

export default App
