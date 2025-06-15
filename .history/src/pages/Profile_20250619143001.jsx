import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { DATABASE_ID } from '../shhh';
import { COLLECTION_ID } from '../shhh';


function People() {

  const [people, setPeople] = useState([]);

useEffect(() => {
    const init = async () => {
      try {
        const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
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
        <div key={person.$id}>{person.name}</div>
      ))}
    </div>
  );
}

export default People;
