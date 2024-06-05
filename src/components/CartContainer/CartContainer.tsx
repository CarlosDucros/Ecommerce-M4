/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";
import cartEmpty from "@/assets/CartEmpty.png";
import Link from "next/link";
import { useCart } from "@/context/CartProvider";
import { BuyButton } from "../BuyButton/BuyButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";

export const CartContainer: React.FC = () => {
  const { cart, cartClearer } = useCart();
  const totalPrice: number = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex flex-col w-1/2 mx-auto my-10 bg-dark-purple p-20 rounded-tr-xl rounded-bl-xl">
          <Image
            src={cartEmpty}
            alt="Man with a cart"
            className="mb-10 lg:max-w-80 mx-auto"
          />
          <h2 className="text-soft-purple">
            It looks like you haven&#39;t added anything to the cart yet.
            <br />
            <Link href="/products" className="text-main-purple font-bold">
              Find products here.
            </Link>
          </h2>
        </div>
      ) : (
        <div className=" flex flex-col md:w-1/2 items-center mx-auto my-10 bg-dark-purple p-20 rounded-tr-xl rounded-bl-xl">
          {cart.map((product, index) => (
            <div key={index}>
              <div className="relative mb-4 md:h-40 md:w-60  lg:h-32 lg:w-80 bg-purple-500 rounded-md p-3 flex flex-col lg:flex-row items-center">
                <DeleteButton id={product.id} />
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[80px] lg:max-w-26 object-cover mr-4"
                />
                <div>
                  <h1 className="text-soft-purple">
                    <span className="font-bold">Name: </span>
                    {product.name}
                  </h1>
                  <p className="text-soft-purple">
                    <span className="font-bold">Price:</span> ${product.price}
                  </p>
                  <div className=" h-0.5 mt-4 w-full bg-main-purple"></div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-soft-purple font-semibold my-4">
            Total price: ${totalPrice}
          </p>
          <div className="flex">
            <button
              onClick={cartClearer}
              className=" bg-red-700  hover:bg-red-500 mr-2 w-fit p-2 rounded-md text-soft-purple">
              Delete all
            </button>
            <BuyButton />
          </div>
        </div>
      )}
    </div>
  );
};
