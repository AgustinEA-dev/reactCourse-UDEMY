import { useState } from "react";
import "./input.css";
export default function Input() {
  const [String, setTextString] = useState("");
  const onChangeHandler = (event) => {
    setTextString(event.target.value);
  };
  return (
    <div className="inputs">
      <input
        className="text-input"
        onChange={onChangeHandler}
        type="text"
        placeholder="Enter First Name"
      />
      <input
        className="text-input"
        onChange={onChangeHandler}
        type="text"
        placeholder="Enter Last Name"
      />
      <input
        className="num-input"
        onChange={onChangeHandler}
        type="number"
        placeholder="Enter number"
      />
    </div>
  );
}
