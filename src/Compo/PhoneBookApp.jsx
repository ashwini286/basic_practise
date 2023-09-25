import React, { useState } from 'react';

const PhoneBookApp = () => {
  // State to manage contact information
  const [contacts, setContacts] = useState([
    { firstName: 'Ram', lastName: 'Dayal', phoneNumber: '123587878' },
    { firstName: 'sita', lastName: 'Dayal', phoneNumber: '987466616646' },
  ]);

  // State to manage form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.phoneNumber) {
      // Add the new contact to the list
      setContacts([...contacts, formData]);

      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
      });
    }
  };

  // Sort contacts by last name
  const sortedContacts = [...contacts].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div>
      <h1>Phone Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Phone Book List</h2>
      <ul>
        {sortedContacts.map((contact, index) => (
          <li key={index}>
            {contact.lastName}, {contact.firstName} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBookApp;
