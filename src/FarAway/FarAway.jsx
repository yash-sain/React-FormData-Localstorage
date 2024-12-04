import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";
import "./FarAway.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false }
];

const FarAway = () => {
  const [getData, setGetData] = useState(initialItems);

  const getFormData = (data) => {
    setGetData((items) => [...items, data]);
  };

  const handleDelete = (id) => {
    setGetData(() => getData?.filter((item) => id !== item?.id));
  };

  const handleToggleItem = (id) => {
    setGetData(
      getData?.map((item) =>
        item?.id === id ? { ...item, packed: !item?.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window?.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setGetData([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form getFormData={getFormData} />
      {getData?.length > 0 ? (
        <PackagingList
          getData={getData}
          handleDelete={handleDelete}
          handleToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
      ) : (
        <div className="list">No Data Found 😞</div>
      )}
      <Stats items={getData} />
    </div>
  );
};

export default FarAway;
