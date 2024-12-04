import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({
  selectedFriend,
  setSelectedFriend,
  handleSplitValue
}) => {
  const [billValue, setBillValue] = useState(null);
  const [yourExpense, setYourExpense] = useState(null);
  const [splitBill, setSplitBill] = useState("user");

  const friendBill = billValue ? billValue - yourExpense : "";

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!billValue || !yourExpense) return;

    handleSplitValue(splitBill === "user" ? friendBill : -yourExpense);

    setBillValue(null);
    setYourExpense(null);
    setSplitBill("user");
    // setSelectedFriend(null);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label htmlFor="bill value">💸 Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e?.target?.value))}
      />
      <label htmlFor="Your Expense">🕴️ Your Expense</label>
      <input
        type="text"
        value={yourExpense ? yourExpense : null}
        onChange={(e) =>
          setYourExpense(
            Number(e?.target?.value) > billValue
              ? yourExpense
              : Number(e?.target?.value)
          )
        }
      />
      <label htmlFor="X's Expense">🧑‍🤝‍🧑 {selectedFriend?.name}'s Expense</label>
      <input
        type="text"
        disabled
        value={friendBill}
        // onChange={(e) => setFriendExpense(Number(e?.target?.value))}
      />
      <label>🤑 Who is paying the bill</label>
      <select
        value={splitBill}
        onChange={(e) => setSplitBill(e?.target?.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
