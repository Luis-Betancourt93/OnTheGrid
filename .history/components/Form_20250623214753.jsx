import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the page from refreshing
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;
