// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/register';

const RegistrationForm = () => {
    const [registrationData, setRegistrationData] = useState({
        companyName: 'goMart',
        clientID: '37bb493c-7303-47ea-8675-21f66ef9b735',
        clientSecret: 'HVIQBVbqmTGEmaE',
        ownerName: 'Kovida',
        ownerEmail: '21103051@mail.jiit.ac.in',
        rollNo: '21103051'
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData({ ...registrationData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('${API_BASE_URL}/test/register', registrationData);
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
            console.error('Error registering:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="companyName" placeholder="Company Name" value={registrationData.companyName} onChange={handleChange} required />
            <input type="text" name="clientID" placeholder="Client ID" value={registrationData.clientID} onChange={handleChange} required />
            <input type="text" name="clientSecret" placeholder="Client Secret" value={registrationData.clientSecret} onChange={handleChange} required />
            <input type="text" name="ownerName" placeholder="Owner Name" value={registrationData.ownerName} onChange={handleChange} required />
            <input type="email" name="ownerEmail" placeholder="Owner Email" value={registrationData.ownerEmail} onChange={handleChange} required />
            <input type="text" name="rollNo" placeholder="Roll No" value={registrationData.rollNo} onChange={handleChange} required />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RegistrationForm;