import React, { useState } from 'react';

import './contactUs.css'
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
        const userContactCollection = collection(db, 'UserContact'); // Use 'collection' to access the collection
      await addDoc(userContactCollection, formData); // Use the addDoc method to add a document
  
        console.log('Contact details stored in Firestore');
    } catch (error) {
      console.error('Error storing data:', error);
      // Handle errors, e.g., show an error message to the user.
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
