import { useState } from "react";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { initialFriends } from "./DummyData";
import { FriendTypes } from "./types";

const FriendComponent = () => {
  const [friends, setFriends] = useState<FriendTypes[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendTypes | null>(
    null
  );

  const handleAddNewFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend: FriendTypes) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend: FriendTypes | null) => {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend?.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: any) => {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div>
      <div>
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleAddNewFriend}>
          {showAddFriend ? "Close" : "Add a friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default FriendComponent;
