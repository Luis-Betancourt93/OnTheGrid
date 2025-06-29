import React, { useEffect, useState } from 'react';
import { database } from '../src/appwrite'; 
import { VITE_DATABASE_ID, VITE_COLLECTION_ID } from '../src/shhh.js';
import { getAllPeople, deletePerson } from '../services/api.js';

function People({people = [], onDeleteSuccess}) {


   

 // Delete person from Appwrite and local state
  const handleDelete = async (id) => {
    try {
      await deletePerson(id); // call Appwrite
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };



  return (
    
    <div className='flex justify-center'>
      {Array.isArray(people) && people.length === 0 ? (
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