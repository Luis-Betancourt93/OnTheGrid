import { database } from '../src/appwrite';
import { ID } from 'appwrite';


const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;


export async function createPerson(data) {
  try {
    const response = await database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(), // Let Appwrite generate a unique ID
      data
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
    const response = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID
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