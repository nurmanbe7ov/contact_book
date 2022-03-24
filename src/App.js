import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContacts from "./components/EditContacts/EditContacts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let [contacts, setContacts] = useState([]);
  let [editContacts, setEditContacts] = useState({});
  let [isEdit, setIsEdit] = useState(false);
  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }
  function handleDeleteContact(id) {
    let newContactArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactArray);
  }
  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContacts(contacts[index]);
  }
  function handleSaveEditedContact(newContact) {
    // console.log(newContact);
    let newContactArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactArray);
    setIsEdit(false);
  }

  return (
    <div className="App">
      <Navbar />
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContacts={editContacts}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
