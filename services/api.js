import { database } from '../src/appwrite';
import { ID, Query } from 'appwrite';
import { account } from '../src/appwrite';



const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;


export async function createPerson(data) {
  try {
    //  Get current user
    const user = await account.get();
    const userId = user.$id;

    //  Attach userId to the data object
    const personWithUser = {
      ...data,
      userId: userId
    };

    //  Store person in database
    const response = await database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      personWithUser
    );

    return response;
  } catch (err) {
    console.error("Failed to create person:", err);
    throw err;
  }
}

export async function deletePerson(documentId) {
  try {
    const response = await database.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    );
    return response;
  } catch (err) {
    console.error("Failed to delete person:", err);
    throw err;
  }
}


export async function getAllPeople() {
  try {
    const user = await account.get();      // 🔐 get logged-in user
    const userId = user.$id;

    const response = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("userId", userId)]       // 🎯 filter by userId
    );

    return response;
  } catch (err) {
    console.error("Failed to fetch people:", err);
    throw err;
  }
}

export async function updatePerson(id, data) {
  try {
    const response = await database.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      id,
      data
    );
    return response;
  } catch (err) {
    console.error("Failed to update person:", err);
    throw err;
  }
}