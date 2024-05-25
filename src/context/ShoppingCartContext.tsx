import { ReactNode, createContext, useContext } from "react";
import { useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode;
};




const ShoppingCartContext = createContext({} );

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  

  return (
    <ShoppingCartContext.Provider
      value={{
      
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
xw