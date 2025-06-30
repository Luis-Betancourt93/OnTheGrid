import React, { useEffect, useState } from 'react';
import { database } from '../src/appwrite'; 
import { VITE_DATABASE_ID, VITE_COLLECTION_ID } from '../src/shhh.js';
import { getAllPeople, deletePerson, updatePerson } from '../services/api.js';

function People({ people = [], onDeleteSuccess }) {

  const handleDelete = async (id) => {
    try {
      await deletePerson(id);
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      {Array.isArray(people) && people.length === 0 ? (
        <p>No data found.</p>
      ) : (
        people.map((person) => (
          <SinglePerson
            key={person.$id}
            person={person}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

// ✅ This component lives in the same file
function SinglePerson({ person, onDelete }) {
  const [chatStatus, setChatStatus] = useState(person.chat);

  const toggleChat = async () => {
    const newStatus = !chatStatus;
    try {
      await updatePerson(person.$id, { chat: newStatus });
      setChatStatus(newStatus); // update UI
    } catch (error) {
      console.error("Error updating chat status:", error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', width: '80%' }}>
      <p className='text-red-400 font-bold'><strong>Name:</strong> {person["name"]}</p>
      <p><strong>Location:</strong> {person["location"]}</p>
      <p><strong>Company:</strong> {person["company-name"]}</p>
      <p><strong>Position:</strong> {person["position-type"]}</p>
      <p><strong>Date Added:</strong> {new Date(person["date-added"]).toLocaleString()}</p>
      <p><strong>Role:</strong> {person["role"]}</p>
      <p><strong>Source:</strong> {person["source"]}</p>

      {/* ☕ Chat Button */}
      <button
        onClick={toggleChat}
        className={chatStatus ? 'bg-green-500' : 'bg-gray-500'}
        style={{ color: 'white', marginRight: '1rem', padding: '0.25rem 0.5rem' }}
      >
        {chatStatus ? '✅ Had Chat' : '☕ No Chat'}
      </button>

      {/* Delete Button */}
      <button
        className='bg-red-500 text-white px-2 py-1'
        onClick={() => onDelete(person.$id)}
      >
        Delete
      </button>
    </div>
  );
}

export default People;
