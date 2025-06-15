import React from 'react';
import {useEffect, useState} from 'react';
import { database } from '../appwrite';
import { DATABASE_ID } from '../shhh';
import { COLLECTION_ID } from '../shhh';


function Profile() {

  const init = async () => {
    const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
     }

  return (
    <div>
      <h1>Hellow Profile</h1>
    </div>
  ); 
}

export default Profile;
