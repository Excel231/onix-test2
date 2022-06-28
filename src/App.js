import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import ThemeColorProvider from './layout/ThemeColorProvider/ThemeColorProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeColorProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/onix-test2" element={<Homepage />} />
          <Route path="/biography" element={<BiographyPage />} />
        </Routes>
      </ThemeColorProvider>
    </BrowserRouter>
  );
};

export default App;
