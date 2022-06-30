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

  const changeShoppingCart = useCallback((item, addToCart) => {
    if (addToCart) {
      setShoppingCart((prevState) => [item, [...prevState]]);
    } else {
      const posOfItemToDelete = shoppingCart.indexOf(item);
      if (posOfItemToDelete === -1) return;
      setShoppingCart((prevState) => prevState.splice(posOfItemToDelete, 1));
    }
  }, []);

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
