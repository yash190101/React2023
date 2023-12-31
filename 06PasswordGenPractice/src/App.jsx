import { useState, useCallback, useEffect ,useRef} from 'react'

import './App.css'

function App() {
  // const [length,setLength] = useState(8)
  // const [numAllowed,setNumAllowed] = useState(false)
  // const [charAllowed,setCharAllowed] = useState(false)
  // const [password,setPassword] = useState("")
  // const [clicked,setClicked] = useState(false)
  // const buttonStyle = {
  //   backgroundColor: clicked ? 'green' : 'orange',
  //   color: '#fff',
  //   padding: '10px 20px',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  //   // Add more styles as needed
  // };



  // const generatePassword = useCallback(() =>{

  //   let pass = ''
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //   if(numAllowed) str+="0123456789"
  //   if(charAllowed) str+="!@#$%^&*(){}[]<>"

  //   for (let i = 0; i < length; i++) {
      
  //     let random = Math.floor(Math.random()*str.length + 1)
  //     pass+=str.charAt(random)
      
  //   }
  //   setPassword(pass)
  // },[length,numAllowed,charAllowed,setPassword])


  // useEffect(()=>{
  //   generatePassword()
  //   setClicked(false)
  // },[length,numAllowed,charAllowed,generatePassword])

  // const copyPassword = useRef()
  // console.log(copyPassword);
  // const copyPasswordToClipboard = useCallback(()=>{

  //   copyPassword.current?.select()
  //   window.navigator.clipboard.writeText(password)
  //   setClicked(true)

  // },[password])
  const [length,setLength] = useState(8)
  const [charAllowed,setCharAllowed] = useState(false)
  const [numAllowed,setNumAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const [button,setButton] = useState(false)
  

  const generatePassword = useCallback(()=>{
    let pass = ""
    let usedforPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = '0123456789'
    let char = '!@#$%^&'
    if(charAllowed) usedforPassword+=char
    if(numAllowed) usedforPassword+=numbers
    for(let i=0;i<length;i++){
      let random = Math.floor(Math.random()*usedforPassword.length)
      pass+=usedforPassword.charAt(random)
    }
    setPassword(pass)
    
  },[length,charAllowed,numAllowed,setPassword])


  useEffect(()=>{
    generatePassword()
    setButton(false)
  },[length,charAllowed,numAllowed,generatePassword])

  const copyInput = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    copyInput.current?.select()
    window.navigator.clipboard.writeText(password)
    setButton(true)
  },[password])





  return (
    <>
      <div className=' text-center  text-orange-600 bg-gray-800 px-3 py-2 shadow rounded-lg overflow-hidden mb-4'>
        <h1 className=' text-4xl text-center text-white my-3'>Password Generator</h1>

        <div className='flex text-center  text-orange-600 bg-gray-800 px-3 py-2 shadow rounded-lg overflow-hidden mb-4'> 
          <input 
            type="text"
            value={password}
            className=" rounded-lg outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyInput}
            
          />
          
          <button className=' mx-3 rounded-lg px-4 py-2 text-black  bg-orange-500' onClick={copyPasswordToClipboard}>{button?"Copied":"Copy"}</button>
        </div>

        <div className='flex text-sm gap-x-2 py-4'>

          <div className='flex items-center gap-x-1 '>
            <input type="range" 
            min={8}
            max={50}
            value={length}
            className=' cursor-pointer mx-3'
            onChange={(e)=>{setLength(e.target.value)}}
            
            /><label> Length : {length}</label>
          </div>

          <div>

              <input type="checkbox" 
              id="number"
              defaultValue={numAllowed}
              onChange={()=>setNumAllowed((value)=>!value)}
               
              /><label> Number </label>

              <input type="checkbox" 
              id="character"
              defaultValue={charAllowed}
              onChange={()=>setCharAllowed((value)=>!value)}
              /><label> character </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
