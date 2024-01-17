import React from "react";
import Friend from "./Friend";
import { FriendTypes } from "../types";

interface FriendListProps {
  friends: FriendTypes[];
}

const FriendList = ({ friends }: FriendListProps) => {
  return (
    <div>
      <ul>
        {friends.map((friend: FriendTypes) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
