import React, { useState } from 'react';

function Form() {
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [dateAdded, setDateAdded] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or database
    console.log('Form submitted:', { companyName, role, dateAdded });
    // Reset form fields
    setCompanyName('');
    setRole('');
    setDateAdded('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Company Name:</label>
        <input 
          type="text" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Role:</label>
        <input 
          type="text" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Date Added:</label>
        <input 
          type="date" 
          value={dateAdded} 
          onChange={(e) => setDateAdded(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  ); 
}