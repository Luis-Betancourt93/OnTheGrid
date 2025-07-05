
import React, { useEffect, useState } from 'react';
import People from '../../components/People';
import Form from '../../components/Form';
import { getAllPeople } from '../../services/api';

function Profile() {
  const [people, setPeople] = useState([]);

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

  return (
    <div className="min-h-screen flex justify-center min-h-screen w-full bg-[url(/grid.jpg)] bg-no-repeat bg-cover">
      <div className="w-full md:w-3/4 bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6"> My Network</h1>

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
