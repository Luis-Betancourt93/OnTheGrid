import React, { useEffect, useState } from 'react';
import { database } from '/appwrite';
import { VITE_DATABASE_ID, VITE_COLLECTION_ID } from '../shhh';

function People() {
  const [people, setPeople] = useState([]);

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
    <div>
      {people.length === 0 ? (
        <p>No data found.</p>
      ) : (
        people.map((person) => (
          <div key={person.$id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <p><strong>Company:</strong> {person["company-name"]}</p>
            <p><strong>Role:</strong> {person["role"]}</p>
            <p><strong>Date Added:</strong> {new Date(person["date-added"]).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default People;