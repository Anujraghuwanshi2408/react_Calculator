import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { CgFormatSlash } from "react-icons/cg";
import  './style.css'
const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [operationResult, setOperationResult] = useState("");

  function validateOperation() {
    if (num1 === "" || num2 === "") {
        if(num1 === ""){
        setErrorMessage("Please enter a number1");
        setOperationResult('')
        return false;

        }else{
                setErrorMessage("Please enter a number2");
                setOperationResult('')
                return false;
        }
    }
    if (!/^-?\d+(\.\d+)?$/.test(num1) || !/^-?\d+(\.\d+)?$/.test(num2)) {
        if(!/^-?\d+(\.\d+)?$/.test(num1)){
         setErrorMessage("Please enter valid number1.");
         setOperationResult('')
         return false;
        }else{
         setErrorMessage("Please enter valid number2.");
         setOperationResult('')
         return false;      
        }
    }
    setErrorMessage("");
    return true;
  }

  function performOperation(operator) {
    if (!validateOperation()) {
      return;
    }

    let newNum1 = parseFloat(num1);
    let newNum2 = parseFloat(num2);
   
    let result;
    if (operator === "add") {
      result = newNum1 + newNum2;
      setOperationResult(result);
     
    }
    if (operator === "subtract") {
      result = newNum1 - newNum2;
      setOperationResult(result);
     
    }
    if (operator === "multiply") {
      result = newNum1 * newNum2;
      setOperationResult(result);
     
    }
    if (operator === "divide") {
      result = newNum1 / newNum2;
      setOperationResult(result);
     
    }

    
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Num1"
        id="num1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Num2"
        id="num2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      ></input>
      <div className="btn">
        <button onClick={() => performOperation("add")}>
          <IoIosAdd />
        </button>
        <button onClick={() => performOperation("multiply")}>
          <IoIosClose />
        </button>
        <button onClick={() => performOperation("subtract")}>
          <IoIosRemove />
        </button>
        <button onClick={() => performOperation("divide")}>
          <CgFormatSlash />
        </button>
      </div>
      {errorMessage && <div id="errorDiv"><p id="error">Error</p>
                            <p>{errorMessage}</p>
                        </div>}
      {operationResult && <div id="successDiv">
                             <p id="success">Success</p>
                            <p>Result : {operationResult}</p>
                        </div>}
    </div>
  );
};

export default App;
