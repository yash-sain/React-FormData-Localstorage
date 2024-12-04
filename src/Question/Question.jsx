import React, { useState } from "react";
import "./Question.css";

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "Javascript"
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 3,
    question:
      "What 's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 4,
    question: "How to give components memory?",
    answer: "useState Hook"
  },
  {
    id: 5,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

const Question = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  };
  return (
    <div>
      <div className="flashcards">
        {questions?.map((question) => {
          return (
            <div
              className={question?.id === selectedId ? "selected" : ""}
              key={question?.id}
              onClick={() => handleClick(question?.id)}
            >
              <p>
                {question?.id === selectedId
                  ? question?.answer
                  : question?.question}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
