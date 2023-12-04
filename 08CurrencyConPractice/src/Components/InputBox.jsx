import React, { useId } from 'react'

function InputBox({
    label,
    className = '',
    amount='',
    onAmountChange,
    selectCurrency = 'usd',
    onCurrencyChange,
    currencyOptions = ['usd','inr'],
    isDisable = false
    
}) {
    const id = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex mb-2 ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block flex">
                    {label}
                </label>
                <input
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    disabled = {isDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100  text-black cursor-pointer outline-none"
                    
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                    ))}
                        
                
                </select>
            </div>
        </div>
    )
}

export default InputBox
