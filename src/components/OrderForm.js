import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

const ContactList = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
        { id: 3, name: 'Bob Johnson', phone: '555-555-5555' },
    ]);

    const handleDeleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const handleAddContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: 'New Contact',
            phone: '000-000-0000',
        };
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const handleEditContact = (id, newName, newPhone) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === id ? { ...contact, name: newName, phone: newPhone } : contact
            )
        );
    };

    const handleSortByName = () => {
        const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
        setContacts(sortedContacts);
    };

    return (
        <div className="container">
            <h2>Contact List</h2>
            <div className="mb-3">
                <button className="btn btn-primary mr-2" onClick={handleAddContact}>
                    Add Contact
                </button>
                <button className="btn btn-secondary mr-2" onClick={handleSortByName}>
                    Sort by Name
                </button>
            </div>
            <ul className="list-group">
                {contacts.map((contact) => (
                    <li key={contact.id} className="list-group-item">
                        <div className="row">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contact.name}
                                    onChange={(e) =>
                                        handleEditContact(contact.id, e.target.value, contact.phone)
                                    }
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contact.phone}
                                    onChange={(e) =>
                                        handleEditContact(contact.id, contact.name, e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteContact(contact.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
