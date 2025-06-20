import React, { useState } from 'react';
import { account, ID } from './appwrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';

function App() {
  return (
  <div className="bg-info-subtle min-vh-100 d-flex justify-content-center align-items-center">
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
