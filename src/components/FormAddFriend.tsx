import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="add-friend-form">
      <label className="form-label">Friend Name</label>
      <input type="text" className="form-input" />

      <label className="form-label">Image URL</label>
      <input type="text" className="form-input" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
