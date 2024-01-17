import React, { useState } from "react";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { initialFriends } from "./DummyData";
import { FriendTypes } from "./types";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleAddNewFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend: FriendTypes) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  return (
    <div className="App">
      <div>
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleAddNewFriend}>
          {showAddFriend ? "Close" : "Add a friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
