
import './App.css'

function App() {
  document.body.style.backgroundColor = '#49223E'
  const changeColor = (color)=>{
   
   document.body.style.backgroundColor = color
  }


  return (
    <>
      
      <div className='container' style={{backgroundColor : 'white'}}>
        <button onClick={()=>changeColor('red')} style={{backgroundColor : 'red',color : 'black'}}>red</button>
        <button onClick={()=>changeColor('blue')} style={{backgroundColor : 'blue',color : 'black'}}>blue</button>
        <button onClick={()=>changeColor('lavender')} style={{backgroundColor : 'lavender',color : 'black'}}>lavender</button>
        <button onClick={()=>changeColor('purple')} style={{backgroundColor : 'purple',color : 'black'}}>purple</button>
        <button onClick={()=>changeColor('pink')} style={{backgroundColor : 'pink',color : 'black'}}>pink</button>
        
      </div>
      
    </>
  )
}

export default App
