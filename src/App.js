import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import Homepage from './pages/Homepage/Homepage';
import Footer from './сomponents/Footer/Footer';
import Header from './сomponents/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/onix-test2" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
