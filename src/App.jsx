import React, { useState } from 'react';
import { account, ID } from './appwrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';

function App() {
  return (
  <div className=" min-vh-100  justify-content-center  mx-auto" style={{width: '80%'}}>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}
export default App;
