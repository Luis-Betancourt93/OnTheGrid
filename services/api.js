import { database } from '../src/appwrite';
import { ID } from 'appwrite';
import { VITE_DATABASE_ID, VITE_COLLECTION_ID } from '../src/shhh';




export async function createPerson(data) {
  try {
    const response = await database.createDocument(
      VITE_DATABASE_ID,
      VITE_COLLECTION_ID,
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
      VITE_DATABASE_ID,
      VITE_COLLECTION_ID,
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
      VITE_DATABASE_ID,
      VITE_COLLECTION_ID
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
      VITE_DATABASE_ID,
      VITE_COLLECTION_ID,
      id,
      data
    );
    return response;
  } catch (err) {
    console.error("Failed to update person:", err);
    throw err;
  }
}