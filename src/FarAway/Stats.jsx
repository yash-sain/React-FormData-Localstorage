import React from "react";

const Stats = ({ items }) => {
  if (!items?.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to your packing list 😉</em>
        </p>
      </footer>
    );
  }

  const numItems = items?.length;
  const numPackedItems = items?.filter(
    (curItem) => curItem?.packed
  )?.length;
  const numOfItemsPercentage = Math?.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numOfItemsPercentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list. and you already packed
        ${numPackedItems} (${numOfItemsPercentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
