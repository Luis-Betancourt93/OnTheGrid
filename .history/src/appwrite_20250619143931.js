import { Client, Account, Databases } from 'appwrite';
import { VITE_PROJECT_ID, VITE_DATABASE_ID, VITE_COLLECTION_ID, VITE_ENDPOINT_ID } from './shhh.js';

export const client = new Client()
    .setEndpoint(VITE_ENDPOINT_ID)
    .setProject(VITE_PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from 'appwrite';


