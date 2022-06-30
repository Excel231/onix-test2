import React, { useCallback, useContext, useState } from 'react';
import PropType from 'prop-types';

export const ShoppingCartContext = React.createContext([]);
export const ShoppingCartChangeContext = React.createContext({});

export const getShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const getShoppingCartChangeContext = () => {
  return useContext(ShoppingCartChangeContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const changeShoppingCart = useCallback((item) => {
    if (!item || shoppingCart.indexOf(item) !== -1) return;
    setShoppingCart((prevState) => [...prevState, item]);
  }, [shoppingCart]);

  return (
    <ShoppingCartChangeContext.Provider value={changeShoppingCart}>
      <ShoppingCartContext.Provider value={shoppingCart}>
        {children}
      </ShoppingCartContext.Provider>
    </ShoppingCartChangeContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropType.element.isRequired
};

export default ShoppingCartProvider;
