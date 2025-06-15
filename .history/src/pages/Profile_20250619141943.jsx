import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { DATABASE_ID } from '../shhh';
import { COLLECTION_ID } from '../shhh';


function Profile() {

  const init = async () => {
    const response = await database.listDocuments(
      import.meta.env.DATABASE_ID || DATABASE_ID,
    )
     }

  return (
    <div>
      <h1>Hello Profile</h1>
    </div>
  ); 
}

export default Profile;
