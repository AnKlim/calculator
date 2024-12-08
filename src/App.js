import { useRef, useState } from "react";
import "./App.css";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/", "%"];

function App() {
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
      case "%": {
        percentage();
        break;
      }
      default:
        break;
    }
  };

  const press = (value) => {
    if (value === "%") {
      percentage();
      return;
    }
    if (
      (currValue.current.includes(".") && value === ".") ||
      (currValue.current === "0" && value === "0")
    ) {
      return;
    }
    setHistory((prev) => prev + value);
    if (numbers.includes(value)) {
      currValue.current += value;
    }
    if (operators.includes(value)) {
      prevValue.current = currValue.current;
      operator.current = value;
      currValue.current = "";
    }
  };

  const clear = () => {
    setHistory("");
    setTotal(0);
    currValue.current = "";
    prevValue.current = "";
    operator.current = "";
  };

  // const erase = () => {
  //   setHistory((prev) => prev.slice(0, -1));
  // setResult(0);
  // };

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
    <>
      <span>{history}</span>
      <h1>{total}</h1>
      <div className="grid grid-cols-4 gap-4">
        <button type="button" onClick={clear}>
          {history ? "C" : "АС"}
        </button>
        <button type="button" /* onClick={erase}  */>Стереть</button>
        <button type="button" onClick={() => press("%")}>
          %
        </button>
        <button type="button" onClick={() => press("/")}>
          /
        </button>

        <button type="button" onClick={() => press("7")}>
          7
        </button>
        <button type="button" onClick={() => press("8")}>
          8
        </button>
        <button type="button" onClick={() => press("9")}>
          9
        </button>
        <button type="button" onClick={() => press("*")}>
          *
        </button>

        <button type="button" onClick={() => press("4")}>
          4
        </button>
        <button type="button" onClick={() => press("5")}>
          5
        </button>
        <button type="button" onClick={() => press("6")}>
          6
        </button>
        <button type="button" onClick={() => press("-")}>
          -
        </button>

        <button type="button" onClick={() => press("1")}>
          1
        </button>
        <button type="button" onClick={() => press("2")}>
          2
        </button>
        <button type="button" onClick={() => press("3")}>
          3
        </button>
        <button type="button" onClick={() => press("+")}>
          +
        </button>

        <button>Доп</button>
        <button type="button" onClick={() => press("0")}>
          0
        </button>
        <button type="button" onClick={() => press(".")}>
          .
        </button>
        <button type="button" onClick={calculate}>
          =
        </button>
      </div>
    </>
  );
}

export default App;
