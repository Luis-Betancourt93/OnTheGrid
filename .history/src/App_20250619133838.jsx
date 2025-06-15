import React, { useState } from 'react';
import { account, ID } from './appwrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
