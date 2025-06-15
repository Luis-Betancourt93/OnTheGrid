import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { VIE_DATABASE_ID } from '../shhh';
import { VIE_COLLECTION_ID } from '../shhh';


function People() {

  const [people, setPeople] = useState([]);

useEffect(() => {
    const init = async () => {
      try {
        const response = await database.listDocuments(VIE_DATABASE_ID, VIE_COLLECTION_ID);
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
