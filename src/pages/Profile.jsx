
import React, { useEffect, useState } from 'react';
import People from '../../components/People';
import Form from '../../components/Form';
import { getAllPeople } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite.js';

function Profile() {
   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current'); // End current session
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const [people, setPeople] = useState([]);
  const [user, setUser] = useState(null);

  // Fetches people from Appwrite
  const loadPeople = async () => {
    try {
      const response = await getAllPeople();
      setPeople(response.documents);
      console.log("Loaded people:", response.documents);

    } catch (error) {
      console.error("Failed to load people:", error);
    }
  };

  // Load people when page first loads
  useEffect(() => {
    loadPeople();
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch (err) {
        console.log('Failed to get user:', err);
      }
    };
    loadUser();
  }, []);

  return (
    <div className="min-h-screen flex justify-center w-full bg-[url(/grid.jpg)] bg-no-repeat bg-cover">
      <div className="w-full md:w-3/4 bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <button onClick={handleLogout}  className='flex ml-auto'>
          Logout
        </button>
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          { user ? `${user.name}'s Network` : 'My Network'}
        </h1>

        {/* Pass the refresh function to the form */}
        <Form onSuccess={loadPeople} />

        <div className="mt-6">
          {/* Pass the people list to the display */}
          <People people={people} onDeleteSuccess={loadPeople} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
