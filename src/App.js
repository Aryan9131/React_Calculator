import './App.css';
import { useState } from 'react';

// Importing Calculator component
import Calculator from './component/calculater';

function App() {
  // State to store result and whether the last operation was a calculation
  const [result, setResult] = useState("");
  const [calculationDone, setCalculationDone] = useState(false);

  const handleClear = () => {
    setResult("");
    setCalculationDone(false);
  };

  // Calculate the given value on screen
  const calculate = () => {
    try {
      setResult(eval(result.toString()));
      setCalculationDone(true);  // Set calculation as done
    } catch {
      setResult("Error!");
      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  };

  // Handle button clicks for operators and numbers
  const handleClick = (e) => {
    const value = e.target.value;

    // If a calculation was just done and the input is a number, reset result
    if (calculationDone && !isNaN(value)) {
      setResult(value);
      setCalculationDone(false);  // Reset calculation done state
    } else {
      // Concatenate new input with existing result
      setResult(calculationDone ? result + value : result.concat(value));
      setCalculationDone(false);
    }
  };

  // Remove last character like backspace
  const handleBack = () => {
    setResult(result.slice(0, -1));
  };

  // Toggle negative/positive of the current number
  const handleMinus = () => {
    if (result.startsWith("-")) {
      setResult(result.substring(1));
    } else {
      setResult("-" + result);
    }
  };

  return (
    <>
      <Calculator
        result={result}
        calculate={calculate}
        handleBack={handleBack}
        handleClear={handleClear}
        handleClick={handleClick}
        handleMinus={handleMinus}
      />
    </>
  );
}

export default App;
