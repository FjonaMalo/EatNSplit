import React from "react";
import Button from "./Button";
import "../App.css";
import { FriendTypes } from "../types";

interface FormSplitBillProps {
  selectedFriend: FriendTypes | null;
}

const FormSplitBill = ({ selectedFriend }: FormSplitBillProps) => {
  return (
    <form className="split-bill-form">
      <h2 className="form-heading">Split a bill with {selectedFriend?.name}</h2>
      <div className="form-group">
        <label className="form-label">Bill value</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Your expense</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">{selectedFriend?.name}'s expense</label>
        <input type="text" className="form-input" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">Who is paying the bill</label>
        <select className="form-select">
          <option>You</option>
          <option>{selectedFriend?.name}</option>
        </select>
      </div>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
