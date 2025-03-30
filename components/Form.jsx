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
    <div className="flex justify-center">
  <form onSubmit={handleSubmit} className="w-full max-w-3xl p-6  shadow-md rounded-xl grid gap-4">
    {/* Grid for input pairs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />

      <input
        type="text"
        placeholder="Position"
        value={positionType}
        onChange={(e) => setPositionType(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
    </div>

    {/* Date and Toggle */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <input
        type="date"
        value={dateAdded}
        onChange={(e) => setDateAdded(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />

      <div className="flex items-center gap-3">
        <span className="font-medium">Chat:</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={chat}
            onChange={(e) => setChatStatus(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 
                          rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform 
                          duration-300 transform peer-checked:translate-x-full"></div>
        </label>
      </div>
    </div>

    {/* Submit button */}
    <button
      type="submit"
      className="bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
    >
      Submit
    </button>
  </form>
</div>
    
  );
}

export default Form;
