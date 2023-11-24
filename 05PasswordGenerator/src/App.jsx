import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numEnable,setNumEnable] = useState(false)
  const [charEnable,setCharEnable] = useState(false)
  const [password,setPassword] = useState("")
  const [copyClicked,setCopyClicked] = useState(false)
  
  const buttonStyle = {
    backgroundColor: copyClicked ? 'green' : 'rgb(249 115 22 / var(--tw-bg-opacity))',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const generatePassword = useCallback(() =>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numEnable) str+='0123456789'
      if(charEnable) str+='@#$%&*'

      for (let i = 1; i <= length; i++){
        let random = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(random) 
      }
      setPassword(pass)
      setCopyClicked(false)
    },[length,numEnable,charEnable,setPassword])
  
    useEffect(()=>{
      generatePassword()
      setCopyClicked(false)
    },[length,numEnable,charEnable,generatePassword])

    const copyPassword = useRef(null)

    const copyPasswordToClipboard = useCallback(()=>{
      copyPassword.current?.select()
      window.navigator.clipboard.writeText(password)
      setCopyClicked(true)
    },[password])
  return (
    <>
    <div className='main text-center  text-orange-600 bg-gray-800 px-3 py-2 shadow rounded-lg overflow-hidden mb-4'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

        <div className='flex text-center  text-orange-600 bg-gray-800 px-3 py-2 shadow rounded-lg overflow-hidden mb-4'> 
          <input 
            type="text"
            value={password}
            className="  w-full rounded-lg outline-none  py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyPassword}
          />
          <button className=' mx-3 rounded-lg px-2 py-2 text-black bg-orange-500' onClick={generatePassword}>Generate</button>
          <button className=' mr-3 rounded-lg px-2 py-2  text-black bg-orange-500' style={buttonStyle} onClick={copyPasswordToClipboard} >{copyClicked? 'Copied!' : 'Copy'}</button>
        </div>

        <div className='flex text-sm gap-x-2 py-4'>
          <div className='flex items-center gap-x-1 '>
            <input 
            type="range"
            min={8}
            max={32}
            value={length}
            className=' cursor-pointer mx-3'
            onChange={(e)=>{setLength(e.target.value)}} 
            
            /><label className=' text-orange-500 '>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              id='num'
              defaultChecked = {numEnable}
              onChange={()=>setNumEnable((prev)=>!prev)}

            /><label className=' text-orange-500' htmlFor="number">Number</label>

            <input type="checkbox"
              id='char' 
              defaultChecked = {charEnable}
              onChange={()=>setCharEnable((prev)=> !prev)}

            /><label className=' text-orange-500' htmlFor="chracters">Characters</label>
          </div>

          
        </div>
    </div>
    </>
  )
}

export default App
