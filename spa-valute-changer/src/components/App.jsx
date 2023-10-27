import icon from '../icons/icon.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import Form from './Form';
import Output from './Output';
import '../css/App.css';

const App = () => {

  const apiKey = 'caa58c875dec4c4e818fa51a02189423';
  const url = `https://open.exchangerate-api.com/v6/latest?apiKey=${apiKey}`;

  const [result, setResult] = useState('')
  const [value, setValue] = useState('');
  const [back, setBack] = useState('');
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data)
        setRates(data.rates)
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
        setFromCurrency(currencyList[0]);
        setToCurrency(currencyList[0]);
      } catch (error) {
        console.error('Error fetching currencies', error);
      }
    };
    fetchCurrencies();
  }, [url]);

  function onSubmit(e) {
    e.preventDefault();
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    if (fromRate && toRate) {
      setBack(value)
      setResult((value / fromRate) * toRate);
    } else {
      setResult(0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header_content">
          <img src={icon} alt="currencyLogo" />
          <h1>Currency Converter</h1>
        </div>
      </header>

      <main>
        <section id='currency' className='currency_main'>
          <Form onSubmit={onSubmit} value={value} setValue={setValue}>
            <Dropdown currencies={currencies} fromCurrency={setFromCurrency} toCurrency={setToCurrency} />
          </Form>
          {result ? <Output value={back} result={result} fromCurrency={fromCurrency} toCurrency={toCurrency} /> : null}
        </section>
      </main>

      <footer id='footer'>
        <div className='footer_text'>
          <span>Created by </span><a href="https://github.com/logos722">Logos722</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
