
import React from 'react';
import People from '/components/People.jsx'; 
import Form from '../../components/Form';

function Profile() {
  return (
   
  <div className="">
    <h1 className='d-flex justify-content-center'>My Profile Page</h1>
    <Form />
    <People />
    <People />
    <People />
    
  </div>

  );
}

export default Profile;
