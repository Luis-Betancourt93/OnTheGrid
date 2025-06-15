import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { VITE_DATABASE_ID } from '../shhh';
import { VITE_COLLECTION_ID } from '../shhh';


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
      {people.map((person) => (
        <div key={person.$id}>{person.company}</div>
      ))}
    </div>
  );
}

export default People;
