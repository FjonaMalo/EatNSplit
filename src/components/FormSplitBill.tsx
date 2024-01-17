import React, { useState } from "react";
import Button from "./Button";
import "../App.css";
import { FriendTypes } from "../types";

interface FormSplitBillProps {
  selectedFriend: FriendTypes | null;
  onSplitBill: (value: any) => void;
}

const FormSplitBill = ({ selectedFriend, onSplitBill }: FormSplitBillProps) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend =
    bill !== "" && paidByUser !== ""
      ? Number(bill) - Number(paidByUser)
      : undefined;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="split-bill-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Split a bill with {selectedFriend?.name}</h2>
      <div className="form-group">
        <label className="form-label">Bill value</label>
        <input
          type="text"
          className="form-input"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Your expense</label>
        <input
          type="text"
          className="form-input"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > Number(bill)
                ? paidByUser
                : e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label className="form-label">{selectedFriend?.name}'s expense</label>
        <input
          type="text"
          className="form-input"
          disabled
          value={paidByFriend !== undefined ? String(paidByFriend) : ""}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Who is paying the bill</label>
        <select
          className="form-select"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option>You</option>
          <option>{selectedFriend?.name}</option>
        </select>
      </div>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
