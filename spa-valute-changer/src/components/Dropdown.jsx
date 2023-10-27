import React from 'react'
import arrow from '../icons/arrow.png'

const Dropdown = ({ currencies, fromCurrency, toCurrency }) => {
  return (
    <React.Fragment>
      <div className='dropdown_main'>
        <select className='dropdown_from' onChange={(e) => fromCurrency(e.target.value)} name="fromCurrency" id="fromCurrency">
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <img src={arrow} alt="arrow" />
        <select className='dropdown_to' onChange={(e) => toCurrency(e.target.value)} name="toCurrency" id="toCurrency">
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  )
}

export default Dropdown;