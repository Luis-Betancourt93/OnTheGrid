import { Client, Account} from 'appwrite';
import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from './shhh.js';
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
