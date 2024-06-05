"use client";

import { ICartContext, ICartProviderProps, IProduct } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartCounter, setCartCounter] = useState<number>(0);

  useEffect(() => {
    const storedCart: string = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      setCartCounter(parsedCart.length);
    }
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartCounter(cart.length);
    }
  }, [cart]);

  const updateCart = (updatedCart: IProduct[]) => {
    setCart(updatedCart);
    setCartCounter(updatedCart.length);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const cartRemover = (productId: number) => {
    const updatedCart: IProduct[] = cart.filter(
      (product: IProduct) => product.id !== productId
    );
    updateCart(updatedCart);
  };

  const cartClearer = () => {
    updateCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartCounter,
        setCartCounter,
        cart,
        setCart,
        cartRemover,
        cartClearer,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context: ICartContext = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }
  return context;
};
