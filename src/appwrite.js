import { Client, Account, Databases } from 'appwrite';
import { PROJECT_ID, DATABASE_ID, COLLECTION_ID, ENDPOINT_ID } from './shhh.js';

export const client = new Client()
    .setEndpoint(ENDPOINT_ID)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from 'appwrite';


