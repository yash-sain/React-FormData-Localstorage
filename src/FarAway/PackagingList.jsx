import React, { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false }
// ];

const PackagingList = ({
  getData,
  handleDelete,
  handleToggleItem,
  onClearList
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = getData;

  if (sortBy === "description")
    sortedItems = getData
      ?.slice()
      ?.sort((a, b) => a?.description?.localeCompare(b?.description));

  if (sortBy === "packed")
    sortedItems = getData
      ?.slice()
      ?.sort((a, b) => Number(a?.packed) - Number(b?.packed));

  const handlerSortBy = (e) => {
    setSortBy(e?.target?.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => {
          return (
            <Item
              key={item?.id}
              item={item}
              handleDelete={handleDelete}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions" value={sortBy} onChange={handlerSortBy}>
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackagingList;
