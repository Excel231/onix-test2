import React, {
  useCallback, useContext, useMemo, useState
} from 'react';
import { ShopItemType } from '../types/Interfaces';

interface ContextType {
    shoppingCart: ShopItemType[];
    changeShoppingCart: (item: ShopItemType) => void;
}

const ShoppingCartContext = React.createContext<ContextType | null>(null);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)!.shoppingCart;
};

export const useShoppingCartChangeContext = () => {
  return useContext(ShoppingCartContext)!.changeShoppingCart;
};

interface Props {
    children: React.ReactElement;
}

const ShoppingCartProvider: React.FC<Props> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<ShopItemType[]>([]);

  const changeShoppingCart = useCallback((item: ShopItemType) => {
    if (!item || shoppingCart.includes(item)) return;
    setShoppingCart((prevState) => [...prevState, item]);
  }, [shoppingCart]);

  const shoppingCartContextValue = useMemo(() => (
    {
      shoppingCart,
      changeShoppingCart
    }
  ), [shoppingCart, changeShoppingCart]);

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
