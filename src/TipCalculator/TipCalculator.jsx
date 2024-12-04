import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [youTip, setYouTip] = useState(0);
  const [FriendTip, setFriendTip] = useState(0);

  const tip = (youTip + FriendTip) / 2;
  const totalTip = (bill * tip) / 100;
  const totalBill = totalTip + bill;

  const handleClear = () => {
    setBill("");
    setYouTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <div>
        <span> How much was the bill? </span>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e?.target?.value))}
        />
      </div>
      <div>
        <span> How did you like the service? </span>
        <select
          value={youTip}
          onChange={(e) => setYouTip(Number(e?.target?.value))}
        >
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amazing!(20%)</option>
        </select>
      </div>
      <div>
        <span> How did your friend like the service? </span>
        <select
          value={FriendTip}
          onChange={(e) => setFriendTip(Number(e?.target?.value))}
        >
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amazing!(20%)</option>
        </select>
      </div>
      {bill > 0 && (
        <>
          <h1>{`You pay $${totalBill} ($${bill} + $${totalTip})`}</h1>
          <button onClick={handleClear}>Reset</button>
            </>
      )}
    </div>
  );
};

export default TipCalculator;
