import React, {
  useCallback, useContext, useMemo, useState 
} from 'react';
import PropType from 'prop-types';

const ShoppingCartContext = React.createContext([]);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext).shoppingCart;
};

export const useShoppingCartChangeContext = () => {
  return useContext(ShoppingCartContext).changeShoppingCart;
};

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const changeShoppingCart = useCallback((item) => {
    if (!item || shoppingCart.includes(item)) return;
    setShoppingCart((prevState) => [...prevState, item]);
  }, [shoppingCart]);

  const shoppingCartContextValue = useMemo(() => (
    { shoppingCart, changeShoppingCart }
  ), [shoppingCart, changeShoppingCart]);

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropType.element.isRequired
};

export default ShoppingCartProvider;
