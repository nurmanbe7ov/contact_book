import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");
  //   console.log(name);
  //   console.log(surname);
  //   console.log(phone);

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }
  return (
    <div className="add">
      <input
        className="input"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="input"
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input
        className="input"
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone number"
        value={phone}
      />
      <button className="button" onClick={handleClick}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
