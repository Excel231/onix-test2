import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import ThemeColorProvider from './context/ThemeColorProvider/ThemeColorProvider';
import ShopPage from './pages/ShopPage/ShopPage';
import ErrorPage from './pages/Error/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeColorProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/onix-test2" element={<Homepage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ThemeColorProvider>
    </BrowserRouter>
  );
};

export default App;
