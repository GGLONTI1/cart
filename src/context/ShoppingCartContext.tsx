import { ReactNode, createContext, useContext } from "react";
import { useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  itemQuantity: (id: number) => number;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItems[];
};

type CartItems = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>("shopping-cart",[]);
  const [isOpen, setIsOpen] = useState(false);
  

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      const updatedItems = currItems.filter((item) => item.id != id);
      if (updatedItems.length === 0 && currItems.length > 0) {
        closeCart();
      }
      return updatedItems;
    });
  }

  function itemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        itemQuantity,
        cartQuantity,
        openCart,
        closeCart,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
