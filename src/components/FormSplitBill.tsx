import React from "react";
import Button from "./Button";
import "../App.css";

const FormSplitBill = () => {
  return (
    <form className="split-bill-form">
      <h2 className="form-heading">Split a bill with X</h2>
      <div className="form-group">
        <label className="form-label">Bill value</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Your expense</label>
        <input type="text" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">X's expense</label>
        <input type="text" className="form-input" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">Who is paying the bill</label>
        <select className="form-select">
          <option>You</option>
          <option>X</option>
        </select>
      </div>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
