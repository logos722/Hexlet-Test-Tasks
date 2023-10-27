import React from 'react'

const Output = ({ value, result, fromCurrency, toCurrency }) => {
  return (
    <React.Fragment>
      <div className='result'>
        <div className="result_from">{value}{fromCurrency}=</div>
        <div className="result_to">{result.toFixed(2)}{toCurrency}</div>
      </div>
    </React.Fragment>
  )
}

export default Output