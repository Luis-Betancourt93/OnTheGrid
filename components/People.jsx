import React, { useEffect, useState } from 'react';
import { database } from '../src/appwrite'; 
import { VITE_DATABASE_ID, VITE_COLLECTION_ID } from '../src/shhh.js';
import { getAllPeople, deletePerson } from '../services/api.js';

function People() {
  const [people, setPeople] = useState([]);

   // Load all people from Appwrite on component mount
  useEffect(() => {
    getAllPeople()
      .then(setPeople)
      .catch(console.error);
  }, []);

 // Delete person from Appwrite and local state
  const handleDelete = async (id) => {
    try {
      await deletePerson(id); // call Appwrite
      setPeople(prev => prev.filter(person => person.$id !== id)); // update UI
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };


  useEffect(() => {
    const init = async () => {
      try {
        const response = await database.listDocuments(VITE_DATABASE_ID, VITE_COLLECTION_ID);
        setPeople(response.documents);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    init();
  }, []);

  return (
    
    <div className='flex justify-center'>
      {people.length === 0 ? (
        <p>No data found.</p>
      ) : (
        people.map((person) => (
          <div key={person.$id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <p className='text-red-400 font-bold'><strong>Name:</strong> {person["name"]}</p>
            <p ><strong>Location:</strong> {person["location"]}</p>
            <p><strong>Company:</strong> {person["company-name"]}</p>
            <p><strong>Position:</strong> {person["position-type"]}</p>
            <p><strong>Date Added:</strong> {new Date(person["date-added"]).toLocaleString()}</p>
            <p><strong>Role:</strong> {person["role"]}</p>
            <p><strong>Source:</strong> {person["source"]}</p>
            <button className= 'bg-red-500' onClick={() => handleDelete(person.$id)}>Delete</button>
          </div>
        ))
      )}

    </div>
  );
}

export default People;