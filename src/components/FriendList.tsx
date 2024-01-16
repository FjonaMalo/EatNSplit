import React from "react";
import { initialFriends } from "../DummyData";
import Friend from "./Friend";

const FriendList = () => {
  return (
    <div>
      <ul>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
