"use client";
import Toastify from "toastify-js";
import { useAuth } from "@/context/AuthProvider";
import { useCart } from "@/context/CartProvider";
import { postOrder } from "@/helpers";
import React from "react";

export const BuyButton: React.FC = () => {
  const { cart, setCart, setCartCounter } = useCart();
  const { token } = useAuth();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      const cartIds: number[] = cart.map((c) => c.id);

      await postOrder(cartIds, token);
      localStorage.removeItem("cart");
      setCart([]);
      setCartCounter(0);
    } catch (error: any) {
      Toastify({
        text: error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        onClick: null,
      });
      throw new Error(error.message);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-main-purple hover:bg-purple-500 w-fit p-2 rounded-md text-soft-purple">
      Buy
    </button>
  );
};
