import React, { useState } from "react";
import "./EditContacts.css";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContacts.name);
  let [surname, setSurname] = useState(props.editContacts.surname);
  let [phone, setPhone] = useState(props.editContacts.phone);
  //   console.log(props.editContacts);
  //   console.log(name);
  function handleSaveClick() {
    let contact = { ...props.editContacts };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);

    setName("");
    setSurname("");
    setPhone("");
  }
  console.log(props, "pr");

  return (
    <div className="edit">
      <input
        className="inp"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="inp"
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input
        className="inp"
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone number"
        value={phone}
      />
      <button className="button" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
};

export default EditContacts;
