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