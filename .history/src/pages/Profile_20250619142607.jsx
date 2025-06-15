import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { DATABASE_ID } from '../shhh';
import { COLLECTION_ID } from '../shhh';


function People() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await database.listDocuments(
      import.meta.env.DATABASE_ID || COLLECTION_ID,
    )

    setPeople(response.documents);
     }

  return (
    <div>
      <div>
        {people.map((person) => (
          <div key={person.$id}>  </div>
        ))}
        
        </div>     
    </div>
  ); 
}

export default People;
