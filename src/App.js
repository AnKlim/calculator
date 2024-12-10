import { useRef, useState } from "react";
import "./App.css";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/", "%"];

function App() {
  const [theme, setTheme] = useState("light");
  const [history, setHistory] = useState("");
  const [total, setTotal] = useState(0);
  const prevValue = useRef("");
  const currValue = useRef("");
  const operator = useRef("");

  const calculate = () => {
    switch (operator.current) {
      case "+": {
        sum();
        break;
      }
      case "-": {
        subtract();
        break;
      }
      case "*": {
        multiply();
        break;
      }
      case "/": {
        divide();
        break;
      }
      default:
        // setTotal(+currValue.current);
        break;
    }
    prevValue.current = "";
    operator.current = "";
    currValue.current = currValue.current + "";
  };

  const press = (value) => {
    if (value === "=") {
      calculate();
      return;
    }

    if (value === "%") {
      percentage();
      return;
    }

    // if (
    //   (currValue.current.includes(".") && value === ".") ||
    //   (currValue.current === "0" && value === "0")
    // ) {
    //   return;
    // }

    if (numbers.includes(value)) {
      appendNumber(value);
      // if (value === "." && !currValue.current) {
      //   value = `0${value}`;
      // }
      // currValue.current += value;
      // // calculate();
      // setHistory((prev) => prev + value);
    }

    if (operators.includes(value)) {
      applyOperation(value);
    }
  };

  const appendNumber = (value) => {
    currValue.current = currValue.current + value;
    setHistory((prev) => prev + value);
  };

  const applyOperation = (value) => {
    if (currValue.current) {
      prevValue.current = currValue.current;
      operator.current = value;
      currValue.current = "";
      setHistory((prev) => prev + value);
    }
  };

  const clear = () => {
    setHistory("");
    setTotal(0);
    currValue.current = "";
    prevValue.current = "";
    operator.current = "";
  };

  const erase = () => {
    // if (prevValue.current) {
    //   prevValue.current = prevValue.current.slice(0, -1);
    // }
    // if (operator.current && !prevValue.current) {
    //   operator.current = "";
    // }
    // if (currValue.current && !operator.current) {
    //   prevValue.current = prevValue.current.slice(0, -1);
    // }
    // calculate();
    // setHistory((prev) => prev.slice(0, -1));
  };

  const sum = () => {
    currValue.current = +prevValue.current + +currValue.current;
    setTotal(currValue.current);
  };

  const subtract = () => {
    currValue.current = +prevValue.current - +currValue.current;
    setTotal(currValue.current);
  };

  const multiply = () => {
    currValue.current = +prevValue.current * +currValue.current;
    setTotal(currValue.current);
  };

  const divide = () => {
    currValue.current = +prevValue.current / +currValue.current;
    setTotal(currValue.current);
  };

  const percentage = () => {
    currValue.current = +currValue.current / 100;
    setTotal(currValue.current);
  };

  return (
    <div
      className={`bg-bgMain p-3 w-52 rounded-lg m-auto relative theme-${theme}`}
    >
      <p className="text-slate-400 text-end break-normal text-sm">{history}</p>
      <h1 className="flex justify-end text-primary text-2xl">
        {history && "="}
        {total}
      </h1>
      <hr className="my-2" />
      <div className="grid grid-cols-4 gap-2">
        <button className="button-functional" type="button" onClick={clear}>
          {history ? "C" : "Аc"}
        </button>
        <button className="button-functional" type="button" onClick={erase}>
          &#8653;
        </button>
        <button
          className="button-operation"
          type="button"
          onClick={() => press("%")}
        >
          &#37;
        </button>
        <button
          className="button-operation"
          type="button"
          onClick={() => press("/")}
        >
          &#215;
        </button>

        <button
          className="button-number"
          type="button"
          onClick={() => press("7")}
        >
          7
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("8")}
        >
          8
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("9")}
        >
          9
        </button>
        <button
          className="button-operation"
          type="button"
          onClick={() => press("*")}
        >
          &#247;
        </button>

        <button
          className="button-number"
          type="button"
          onClick={() => press("4")}
        >
          4
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("5")}
        >
          5
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("6")}
        >
          6
        </button>
        <button
          className="button-operation"
          type="button"
          onClick={() => press("-")}
        >
          &#8722;
        </button>

        <button
          className="button-number"
          type="button"
          onClick={() => press("1")}
        >
          1
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("2")}
        >
          2
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("3")}
        >
          3
        </button>
        <button
          className="button-operation"
          type="button"
          onClick={() => press("+")}
        >
          &#43;
        </button>

        <button
          className="button-number"
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light"
            ? String.fromCodePoint(0x263c)
            : String.fromCodePoint(0x263e)}
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press("0")}
        >
          0
        </button>
        <button
          className="button-number"
          type="button"
          onClick={() => press(".")}
        >
          &#8901;
        </button>
        <button className="button-operation" type="button" onClick={calculate}>
          &#x3d;
        </button>
      </div>
    </div>
  );
}

export default App;
