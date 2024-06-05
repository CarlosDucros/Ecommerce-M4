import { useCart } from "@/context/CartProvider";
import { DeleteButtonProps } from "@/types";
import React from "react";

export const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const { cart, setCart } = useCart();

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const product = cart.find((item) => item.id === id);
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
  return (
    <button
      className="bg-red-500 hover:scale-110 hover:bg-red-400 transition absolute -top-2 -right-2 rounded-sm"
      onClick={deleteHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 256 256">
        <path
          fill="#E6BBFF"
          d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
        />
      </svg>
    </button>
  );
};
