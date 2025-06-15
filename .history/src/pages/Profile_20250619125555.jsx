import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { DATABASE_ID } from '../shhh';
import { COLLECTION_ID } from '../shhh';


function Profile() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    init();
  }, [])

  const init = async () => {
    const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID);

    setUser(response.documents);
     }

  return (
    <div>
      <div>
        {people.map(note => (
          <div key={people.$id}>
            {people.body}
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default Profile;
