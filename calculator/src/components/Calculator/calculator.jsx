import React, { useState, useEffect } from 'react';
import './calculator.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to update the input value when a button is clicked
  const onButtonClick = (e) => {
    const value = e.target.getAttribute('data-num');
    setInputValue(inputValue + value);
  };

  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
      setInputValue(inputValue + event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue('Error');
      }
    } else if (event.key === 'Backspace') {
      setInputValue(inputValue.slice(0, -1)); 
    } else if (event.key === 'Escape') {
      setInputValue('');
    }
  };

  // Effect hook to attach and detach the event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputValue]);

  return (
    <>
      <h1>Calculator</h1>
      <section className="calculator">
        <form>
          <input type="text" className="screen" id="calc-screen" value={inputValue} readOnly />
        </form>

        <div className="buttons">
    <button type="button" className="btn btn-yellow" data-num="*" onClick={onButtonClick}>*</button>
    <button type="button" className="btn btn-yellow" data-num="/" onClick={onButtonClick}>/</button>
    <button type="button" className="btn btn-yellow" data-num="+" onClick={onButtonClick}>+</button>
    <button type="button" className="btn btn-yellow" data-num="-" onClick={onButtonClick}>-</button>

    <button type="button" className="btn btn-grey" data-num="9" onClick={onButtonClick}>9</button>
    <button type="button" className="btn btn-grey" data-num="8" onClick={onButtonClick}>8</button>
    <button type="button" className="btn btn-grey" data-num="7" onClick={onButtonClick}>7</button>
    <button type="button" className="btn btn-grey" data-num="6" onClick={onButtonClick}>6</button>
    <button type="button" className="btn btn-grey" data-num="5" onClick={onButtonClick}>5</button>
    <button type="button" className="btn btn-grey" data-num="4" onClick={onButtonClick}>4</button>
    <button type="button" className="btn btn-grey" data-num="3" onClick={onButtonClick}>3</button>
    <button type="button" className="btn btn-grey" data-num="2" onClick={onButtonClick}>2</button>
    <button type="button" className="btn btn-grey" data-num="1" onClick={onButtonClick}>1</button>
    <button type="button" className="btn btn-grey" data-num="0" onClick={onButtonClick}>0</button>
    <button type="button" className="btn btn-grey" data-num="." onClick={onButtonClick}>.</button>

    <button type="button" className="btn-equal" onClick={() => setInputValue(eval(inputValue).toString())}>=</button>
    <button type="button" className="btn-clear" onClick={() => setInputValue('')}>C</button>
</div>


    </section>
    </>
  );
}


export default Calculator