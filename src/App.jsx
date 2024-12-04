import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
];

const App = () => {
  // const step = 3;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextHandler = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousHandler = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="close" onClick={toggleHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className={`${step === 1 ? "disable" : ""}`}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              className={`${step === 3 ? "disable" : ""}`}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
