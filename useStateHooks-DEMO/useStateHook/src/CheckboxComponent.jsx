import { useState } from "react";
import "./checkBox.css";
export default function CheckBox() {
  const [liked, setLiked] = useState(true);
  const onchangeHandler = (event) => {
    setLiked(event.target.checked);
  };
  return (
    <div>
      <label id="check" htmlFor="checkBox">
        Do you like this?
      </label>
      <input
        id="check"
        onChange={onchangeHandler}
        name="checkBox"
        type="checkbox"
      />
      <p className="p">You {liked ? "liked this!" : "did not liked this!"}</p>
    </div>
  );
}
