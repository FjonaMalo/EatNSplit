import React, { useState } from "react";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { factory } from "typescript";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleAddNewFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  return (
    <div className="App">
      <div>
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleAddNewFriend}>
          {showAddFriend ? "Close" : "Add a friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
