# OnTheGrid
 
This project is a CRM (Customer Relationship Management) app built with React and Appwrite. It lets users log in, add and manage contacts, and keep track of networking connections all in one place.

**Link to project:** https://onthegrid.netlify.app/login

**Tech used:** HTML, CSS, Tailwind CSS, JavaScript, React, Vite, Appwrite, Playwright

This CRM app was built using React to create reusable UI components and manage application state. I used Tailwind CSS for styling, allowing me to quickly design the interface using utility classes. Vite powers the development environment, providing fast builds and a smooth workflow. Navigation is handled with React Router, enabling seamless transitions between pages like login and profile. For the backend, I integrated Appwrite to manage authentication, database storage, and user sessions. I also added Playwright for end-to-end testing to ensure the app functions correctly from a user's perspective. The project is structured with clear separation between components, pages, and API logic for maintainability and scalability.

## Optimizations
To take this CRM project to the next level, several powerful optimizations can be added. On the performance side, implementing lazy loading for routes and memoizing components will help reduce unnecessary rendering and speed up the app, especially on slower networks. Debouncing user input, like search fields, can also help minimize unnecessary API calls and improve responsiveness.

## Lessons Learned:
Building this CRM app came with a lot of valuable lessons. One of the biggest takeaways was learning how to manage state in React, especially when dealing with form inputs, dynamic lists, and updating the UI after adding or deleting a contact. Structuring components in a clean, reusable way made the code easier to understand and maintain.

Integrating Appwrite was a great introduction to working with a backend service. It helped me understand how to handle user authentication, securely store data, and organize API logic in a way that keeps the frontend simple. Using environment variables to protect sensitive data was also an important step in learning how to build more secure applications.
