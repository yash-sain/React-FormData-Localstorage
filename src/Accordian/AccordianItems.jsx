import React from "react";

const AccordianItems = ({ nums, title, text, curOpen, onOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen((curItem) => !curItem);
  // };

  const handleOpen = (id) => {
    onOpen(id);
  };

  const isOpen = nums === curOpen;  

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => handleOpen(nums)}>
      <p className="number">{nums < 9 ? `0${nums + 1}` : nums + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
    // <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    //   <p className="number">{nums < 9 ? `0${nums + 1}` : nums + 1}</p>
    //   <p className="text">{title}</p>
    //   <p className="icon">{isOpen ? "-" : "+"}</p>
    //   {isOpen && <div className="content-box">{text}</div>}
    // </div>
  );
};

export default AccordianItems;
