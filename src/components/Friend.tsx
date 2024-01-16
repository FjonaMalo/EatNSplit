import React from "react";
import { FriendProps } from "../types";

const Friend = ({ friend }: FriendProps) => {
  console.log(friend);

  return (
    <li className="friend-container">
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
        <button className="select-button">Select</button>
      </div>
    </li>
  );
};

export default Friend;
