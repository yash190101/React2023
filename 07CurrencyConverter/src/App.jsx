import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'
function App() {

  const [amount,setAmount] = useState('')
  const [to,setTo] = useState('inr')
  const [from,setFrom] = useState('usd')
  const [convertedAmount,setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  //extra added feature
  const checkForZero = (amount)=>{
    if(amount>0 && !isNaN(amount) && amount!="e" && amount!="E"){
      setAmount(amount)
    }
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
       
    >
        <div className="w-full">
          
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                {/* <div><img src="https://www.pexels.com/photo/close-up-of-coins-on-table-325154/" alt="" /></div> */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                           onAmountChange={(amount)=>checkForZero(amount)}
                            //onAmountChange={(amount)=>setAmount(amount)}
                            selectCurrency={from}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            currencyOptions={options}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            selectCurrency={to}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            currencyOptions={options}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                        Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
