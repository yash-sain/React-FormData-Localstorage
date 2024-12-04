import React from "react";
import FriendItem from "./FriendItem";

const FriendList = ({ friends, onHandleSelection, selectedFriend }) => {
  return (
    <ul>
      {friends?.map((friend) => {
        return (
          <FriendItem
            friend={friend}
            key={friend?.id}
            onHandleSelection={onHandleSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
