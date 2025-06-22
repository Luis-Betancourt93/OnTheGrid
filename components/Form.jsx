import React, { useState } from 'react';
import { createPerson } from '../services/api';


function Form() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState(''); 
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [source, setSource] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  


const handleSubmit = async (e) => {
  e.preventDefault(); // stop form from refreshing the page

  const personData = {
    "name": name,
  "company-name": companyName,
  "role": role,
  "location": location,
  "position-type": positionType,
  "source": source,
  "date-added": dateAdded,
  };

  try {
    const result = await createPerson(personData);
    console.log("Person added:", result);
    alert("Person submitted successfully!");
    // Optional: Clear the form here if you want
  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong. Please try again.");
  }
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
      <label>
        Date:
        <input 
          type="date" 
          value={dateAdded} 
          onChange={(e) => setDateAdded(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;
