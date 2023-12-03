
import React , {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = 'usd',
    currencyOptions = ['usd','inr'],
    className = "",
    amountDisabled = false,
    currencyDisabled = false
}) {
   const inputCurrencyId = useId()
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex mb-2 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={inputCurrencyId} className="text-black mb-2 inline-block flex">{label}</label>
                <input
                    id={inputCurrencyId}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled = {amountDisabled}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} //Checking if that fuction is available or not in order to work if it crashes
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
                    disabled = {currencyDisabled}
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
    );
}

export default InputBox;


