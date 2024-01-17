import React from "react";
import { FriendTypes } from "../types";
import Button from "./Button";

interface FriendProps {
  friend: FriendTypes;
  onSelection: (friend: FriendTypes) => void;
  selectedFriend: FriendTypes | null;
}

const Friend = ({ friend, onSelection, selectedFriend }: FriendProps) => {
  console.log(friend);

  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "friend-container-select" : "friend-container"}>
      <img src={friend.image} alt={friend.name} className="friend-image" />
      <div className="friend-details">
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="negative-balance">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="positive-balance">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
};

export default Friend;
