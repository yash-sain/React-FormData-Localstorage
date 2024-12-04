import React from "react";
import Button from "./Button";

const FriendItem = ({ friend, onHandleSelection, selectedFriend }) => {
  return (
    <li className={selectedFriend?.id === friend?.id ? "selected" : ""}>
      <img src={friend?.image} alt={friend?.name} />
      <h3>{friend?.name}</h3>
      {friend?.balance < 0 && (
        <p className="red">
          You own {friend?.name} {Math?.abs(friend?.balance)}€
        </p>
      )}
      {friend?.balance > 0 && (
        <p className="green">
          {friend?.name} own You {friend?.balance}€
        </p>
      )}
      {friend?.balance === 0 && <p>You and {friend?.name} are even</p>}
      <Button onClick={() => onHandleSelection(friend)}>
        {selectedFriend?.id === friend?.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default FriendItem;
