import React, { useState } from "react";
import Button from "./Button";
import { FriendTypes } from "../types";

interface FormAddFriendProps {
  onAddFriend: (friend: FriendTypes) => void;
}

const FormAddFriend = ({ onAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://randomuser.me/api/portraits/women/2.jpg"
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <label className="form-label">Friend Name</label>
      <input
        type="text"
        className="form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form-label">Image URL</label>
      <input
        type="text"
        className="form-input"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
