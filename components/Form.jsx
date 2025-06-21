import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState(''); 
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [source, setSource] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the page from refreshing
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Company Name:
        <input 
          type="text" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Role:
        <input 
          type="text" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Location:
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Position Type:
        <input 
          type="text" 
          value={positionType} 
          onChange={(e) => setPositionType(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Source:
        <input 
          type="text" 
          value={source} 
          onChange={(e) => setSource(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;
