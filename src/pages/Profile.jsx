
import React from 'react';
import People from '/components/People.jsx'; 
import Form from '../../components/Form';

function Profile() {
  return (
   
   <div className="min-h-screen bg-gray-200 flex justify-center  ">
      <div className="w-full md:w-3/4 bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">My Profile Page</h1>

        <Form />

        <div className="mt-6">
          <People />
        </div>
      </div>
    </div>

  );
}

export default Profile;
