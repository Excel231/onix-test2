import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import Homepage from './pages/Homepage/Homepage';
import withLayout from './HOC/withLayout/withLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={withLayout(<Homepage />)} />
      <Route path="/biography" element={withLayout(<BiographyPage />)} />
      <Route path="/onix-test2" element={withLayout(<Homepage />)} />
    </Routes>
  );
}

export default App;
