import React, { useState } from "react";
import "./Accordian.css";
import AccordianItems from "./AccordianItems";

const fags = [
  {
    title: "Where are these chairs assembled",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eum nesciunt nostrum pariatur."
  },
  {
    title: "How long do I have to return my chair?",
    text: "tempora numquam ullam consequuntur inventore quisquam obcaecati accusamus facere a exercitationem omnis? Suscipit magni autem ad quibusdam inventore."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Optio iusto natus molestias quasi architecto autem delectus adipisci aspernatur beatae alias."
  }
];

const Accordian = () => {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordian">
      {fags?.map((curItem, index) => {
        return (
          <AccordianItems
            curOpen={curOpen}
            onOpen={setCurOpen}
            key={index}
            nums={index}
            title={curItem?.title}
            text={curItem?.text}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
