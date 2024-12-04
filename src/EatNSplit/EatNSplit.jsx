import React, { useState } from "react";
import FriendList from "./FriendList";
import "./EatNSplit.css";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
];

const EatNSplit = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const getItems = (data) => {
    setItems((curItem) => [...curItem, data]);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
    setOpen(false);
  };

  const handleCloseForm = () => {
    setOpen(!open);
    setSelectedFriend(null);
  };

  const handleSplitValue = (value) => {
    setItems((friends) =>
      friends?.map((friend) =>
        friend?.id === selectedFriend?.id
          ? { ...friend, balance: friend?.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={items}
          setOpen={setOpen}
          selectedFriend={selectedFriend}
          onHandleSelection={handleSelection}
        />
        {open && <FormAddFriend getItems={getItems} setOpen={setOpen} />}
        <Button onClick={handleCloseForm}>
          {open ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          handleSplitValue={handleSplitValue}
        />
      )}
    </div>
  );
};

export default EatNSplit;
