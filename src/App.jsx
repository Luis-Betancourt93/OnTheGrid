import React, { useState } from 'react';
import { account, ID } from './appwrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
  <div className=' '>
     <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  </div>
     
  
  );
}

export default App;
