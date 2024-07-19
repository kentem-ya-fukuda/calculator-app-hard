import React, { useState } from 'react';
import '../styles.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | number>('');

  const handleInput = (value: string) => {
    if (value === "." && input === "") {
      setInput("0" + value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      if (evalResult === Infinity || isNaN(evalResult)) {
        throw new Error('Invalid operation');
      }
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div aria-label="input">{input || '0'}</div>
        <div aria-label="result" className="result">{result}</div>
      </div>
      <div className="buttons">
        <button aria-label="1" onClick={() => handleInput('1')}>1</button>
        <button aria-label="2" onClick={() => handleInput('2')}>2</button>
        <button aria-label="3" onClick={() => handleInput('3')}>3</button>
        <button aria-label="+" onClick={() => handleInput('+')}>+</button>
        <button aria-label="4" onClick={() => handleInput('4')}>4</button>
        <button aria-label="5" onClick={() => handleInput('5')}>5</button>
        <button aria-label="6" onClick={() => handleInput('6')}>6</button>
        <button aria-label="-" onClick={() => handleInput('-')}>-</button>
        <button aria-label="7" onClick={() => handleInput('7')}>7</button>
        <button aria-label="8" onClick={() => handleInput('8')}>8</button>
        <button aria-label="9" onClick={() => handleInput('9')}>9</button>
        <button aria-label="*" onClick={() => handleInput('*')}>*</button>
        <button aria-label="0" onClick={() => handleInput('0')}>0</button>
        <button aria-label="." onClick={() => handleInput('.')}>.</button>
        <button aria-label="/" onClick={() => handleInput('/')}>/</button>
        <button aria-label="=" onClick={calculate}>=</button>
        <button aria-label="clear" onClick={clear} className="clear">C</button>
      </div>
    </div>
  );
};

export default Calculator;
