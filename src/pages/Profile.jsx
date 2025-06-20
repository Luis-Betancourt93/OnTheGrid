
import React from 'react';
import People from '/components/People.jsx'; 
import Form from '../../components/Form';

function Profile() {
  return (
   <div className="bg-light min-vh-100 w-100 border-danger">
  <div className="container">
    <h1>My Profile Page</h1>
    <People />
    <People />
    <People />
    <Form />
  </div>
</div>
  );
}

export default Profile;
