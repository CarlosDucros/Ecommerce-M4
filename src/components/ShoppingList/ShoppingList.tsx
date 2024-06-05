/* eslint-disable @next/next/no-img-element */
"use client";

import { getOrders } from "@/helpers";
import { IOrder } from "@/types";
import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

export const ShoppingList: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const token: string = localStorage.getItem("token");

  useEffect(() => {
    getOrders(token)
      .then((data: IOrder[]) => setOrders(data))
      .catch((err: any) => console.error(err));
  }, [token]);

  return (
    <>
      <div className="my-10 ">
        <h1 className="my-5  text-center text-main-purple font-bold text-2xl">
          Shopping List
        </h1>
        <div className="grid grid-cols-1 gap-5">
          {orders ? (
            orders.map((order: IOrder) => (
              <div key={order.id} className="p-5 flex flex-col ">
                <div className="bg-purple-600 h-[40px] items-center lg:w-[30rem] flex justify-around">
                  <div className="flex gap-1 items-center">
                    <p className="font-semibold">Status: </p>
                    <div
                      className={`${
                        order.status == "approved"
                          ? "bg-green-400"
                          : "bg-red-500"
                      } h-5 w-5 rounded-full`}></div>
                  </div>
                  <h2>
                    <span className="font-semibold">Date: </span>
                    {new Date(order.date).toLocaleDateString()}
                  </h2>
                  <p>
                    <span className="font-semibold">Total price: $</span>
                    {order.products.reduce((acc, curr) => acc + curr.price, 0)}
                  </p>
                </div>
                <div className="">
                  <Dropdown key={order.id} products={order.products} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-soft-purple">No orders</p>
          )}
        </div>
      </div>
    </>
  );
};
