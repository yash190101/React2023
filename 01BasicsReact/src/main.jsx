import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'



function Run(){
  return(
    <h1>Helllo From Run</h1>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Run/>
    <App /> 
    <Chai />
 
    
  </React.StrictMode>,
)
