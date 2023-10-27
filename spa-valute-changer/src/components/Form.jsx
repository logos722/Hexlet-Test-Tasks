import React, { useRef, useEffect } from 'react'

const Form = ({ value, setValue, onSubmit, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <form className='main_form' onSubmit={(e) => { onSubmit(e) }} action="">
        <input className='main_input' aria-label='Введите сумму' ref={inputRef} onChange={(e) => { setValue(e.target.value) }} value={value} type="text" />
        {children}
        <button onClick={onSubmit}>Convert!</button>
      </form>
    </React.Fragment>
  )
}

export default Form;