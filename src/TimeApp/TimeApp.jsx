import React, { useState } from "react";
import "./TimeApp.css";

const TimeApp = () => {
  const [range, setRange] = useState(1);
  const [text, setText] = useState(0);
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);
  // const date = new Date("june 21 2027");
  // date.setDate(date.getDate() + count);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + text);

  const HandlerNext = () => {
    setText(range + text);
  };
  const HandlerPrevious = () => {
    setText(range - text);
    // console.log(Number(text) - Number(range))
  };

  const HandleReset = () => {
    setRange(1);
    setText(0);
  };
  return (
    <div>
      {/* <p className="flex">
        <button onClick={() => setStep(step - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep(step + 1)}>+</button>
      </p>
      <p className="flex">
        <button onClick={() => setCount(count - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + step)}>+</button>
      </p>
      <div className="center">
        <p>
            <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
          <span>{date.toDateString()}</span>
        </p>
      </div> */}
      <p className="flex">
        <input
          type="range"
          min="1"
          max="10"
          id="rang"
          value={range}
          onChange={(e) => setRange(Number(e?.target?.value))}
        />
        <label htmlFor={range}>{range}</label>
      </p>
      <p className="flex">
        <button onClick={HandlerPrevious}>-</button>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(Number(e?.target?.value))}
        />
        <button onClick={HandlerNext}>+</button>
      </p>
      <p className="center">
        <span>
          {text === 0
            ? "Today is "
            : text > 0
            ? `${text} days from today is `
            : `${Math.abs(text)} days ago was `}
        </span>
        <span>{date?.toDateString()}</span>
      </p>
      {text && range ? (
        <div className="center">
          <button onClick={HandleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default TimeApp;
