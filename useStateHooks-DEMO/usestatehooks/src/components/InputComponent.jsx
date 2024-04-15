import { useState } from "react";
import "../styles/inputStyles.css"

export default function Input() {
  const [firstName, setFirstName] = useState("");
  const onchangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  return (
    <div className="input">
      <input className="inputs" onChange={onchangeHandler} type="text" />
    </div>
  );
}
