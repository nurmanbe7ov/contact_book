import React from "react";
import "./ContactList.css";

const ContactsList = (props) => {
  //   console.log(props);
  return (
    <div className="list">
      {props.contacts.map((item, index) => (
        <ul className="ul" key={item.id}>
          <li className="ul-list">{item.name}</li>
          <li className="ul-list">{item.surname}</li>
          <li className="ul-list">{item.phone}</li>
          <li>
            <button
              className="button"
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </button>
            <br />
            <button
              className="button"
              onClick={() => props.handleEditIndex(index)}
            >
              Edit
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
