"use client";

import { useAuth } from "@/context/AuthProvider";
import { useCart } from "@/context/CartProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ShoppingList } from "../ShoppingList/ShoppingList";

export const Dashboard: React.FC = () => {
  const { setToken, setUserData, userData } = useAuth();
  const router = useRouter();
  const { cartClearer } = useCart();

  useEffect(() => {
    if (!userData) {
      router.push("/");
    }
  }, [userData, router]);

  if (!userData) {
    return null;
  }

  const signOutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setToken(null);
    setUserData(null);
    cartClearer();
    router.push("/");
  };

  return (
    <>
      <div className="text-soft-purple mb-7 flex flex-col items-center bg-dark-purple md:w-2/3 mx-auto">
        <h1 className="text-main-purple font-bold text-4xl my-5">Dashboard</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="items-center justify-center flex flex-col">
            <div className="rounded-[100%] mb-5 border border-soft-purple  flex justify-center items-center bg-main-purple text-center w-10 h-10 lg:h-32 lg:w-32 ">
              <p className="text-3xl lg:text-7xl font-bold ">
                {userData && userData.name.charAt(0).toUpperCase()}
              </p>
            </div>
            <p>
              <span className="font-semibold">Name: </span>
              {userData.name}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {userData.email}
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              {userData.address}
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              {userData.phone}
            </p>
          </div>
          <button
            onClick={signOutHandler}
            type="button"
            className="bg-main-purple text-soft-purple p-2 rounded-md m-5 shadow-lg hover:bg-purple-500">
            Sign out
          </button>
        </div>
        <div>
          <ShoppingList />
        </div>
      </div>
    </>
  );
};
