import { useState } from "react";
import "../styles/inputStyles.css";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <div className="input">
        <input
          className="inputs"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
        <input
          className="inputs"
          value={person.lastName}
          onChange={handleLastNameChange}
        />

        <input
          className="inputs"
          value={person.email}
          onChange={handleEmailChange}
        />

        <p className="text">
          {person.firstName} {person.lastName} ({person.email})
        </p>
      </div>
    </>
  );
}
