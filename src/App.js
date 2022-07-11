import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { Provider } from 'react-redux';
import './i18n';
import ThemeColorProvider from './context/ThemeColorProvider';
import ShoppingCartProvider from './context/ShoppingCartProvider';
import Homepage from './pages/Homepage/Homepage';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ErrorPage from './pages/Error/ErrorPage';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <ThemeColorProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/onix-test2" element={<Homepage />} />
              <Route path="/biography" element={<BiographyPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </ThemeColorProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
