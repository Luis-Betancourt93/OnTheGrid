import React, { useState } from 'react';
import { createPerson } from '../services/api';


function Form({onSuccess}) {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState(''); 
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [source, setSource] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [chat,setChatStatus] = useState(false)
  


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
  "chat" : chat
  };

  try {
    const result = await createPerson(personData);
    console.log("Person added:", result);
    alert("Person submitted successfully!");

    // Clears the form
    setName('');
    setCompanyName('');
    setRole('');
    setLocation('');
    setPositionType('');
    setSource('');
    setDateAdded('');
    setChatStatus(false);

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className='flex justify-center text-red-900'>
       <form onSubmit={handleSubmit} className='w-3/4'>
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
      <div className="flex items-center gap-2">
  <span>Chat:</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={chat}
      onChange={(e) => setChatStatus(e.target.checked)}
    />
    <div
      className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 
                 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"
    ></div>
    <div
      className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform 
                 duration-300 transform peer-checked:translate-x-full"
    ></div>
  </label>
</div>
      <br />
      <button type="submit" className='w-full flex justify-center'>Submit</button>
    </form>
    </div>
   
    
  );
}

export default Form;
