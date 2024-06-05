"use client";
import Toastify from "toastify-js";
import Image from "next/image";
import React from "react";
import cartImg from "@/assets/cart.svg";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartProvider";
import { ICartButtonProps, IProduct } from "@/types";

export const CartButton: React.FC<ICartButtonProps> = ({ product }) => {
  const { cart, setCart } = useCart();
  const router = useRouter();
  const userStorage: string =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!userStorage) {
      Toastify({
        duration: 2500,
        text: "You must be logged in to add products to cart. \n Click here to login!",
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
        stopOnFocus: true,
        onClick: function () {
          router.push("/login");
        },
      }).showToast();
      return;
    }

    const existingProduct: IProduct = cart.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      Toastify({
        duration: 2500,
        text: "This product has already been added",
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
        stopOnFocus: true,
      }).showToast();
    } else {
      const newCart = [...cart, { ...product }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      Toastify({
        duration: 2500,
        text: "Product has been added to cart",
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
        stopOnFocus: true,
      }).showToast();
    }
  };

  return (
    <button
      onClick={addToCartHandler}
      className="flex text-sm mt-5 items-center gap-2 w-fit bg-dark-purple text-soft-purple p-2 rounded-md m-5 shadow-lg hover:bg-purple-500">
      Add to Cart <Image src={cartImg} alt="Cart" />
    </button>
  );
};
