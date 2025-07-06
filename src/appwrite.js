import { Client, Account, Databases } from 'appwrite';


export const client = new Client()
    .setEndpoint(import.meta.env.VITE_ENDPOINT_ID)
    .setProject(import.meta.env.VITE_PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
//export const result = await account.deleteSessions();
export { ID } from 'appwrite';


