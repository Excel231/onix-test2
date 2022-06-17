import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import BiographyPage from './pages/BiographyPage/BiographyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/onix-test2" element={<Homepage />} />
      <Route path="/biography" element={<BiographyPage />} />
    </Routes>
  );
}

export default App;
