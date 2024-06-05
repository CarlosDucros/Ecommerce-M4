/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/types";
import React from "react";

const Card: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <div className=" hover:bg-purple-500 text-center hover:scale-105  flex md:gap-2 h-[250px] md:h-[350px] border-soft-purple border-l-4 my-auto flex-col rounded-tr-xl rounded-bl-xl items-center m-2 text-soft-purple p-5 lg:p-8 max-w-[150px] md:max-w-[200px] justify-center bg-main-purple ">
      <img
        className="m-auto max-h-[100px]  md:max-h-[150px] md:max-w-[150px]"
        src={image}
        alt={name}
      />
      <hr className="hidden md:block border-t-1 border-soft-purple w-[90%] " />
      <h1 className="font-bold text-md">{name}</h1>
      <p>${price}</p>
      <button className="bg-dark-purple p-1 hover:bg-purple-600 rounded-md">
        See more
      </button>
    </div>
  );
};

export default Card;
