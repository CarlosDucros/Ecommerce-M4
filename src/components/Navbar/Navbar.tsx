"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/../public/Logo.png";
import Searchbar from "../Searchbar/Searchbar";
import Link from "next/link";
import profile from "@/assets/profile.svg";
import cart from "@/assets/cart.svg";
import { useAuth } from "@/context/AuthProvider";
import { useCart } from "@/context/CartProvider";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token, setToken } = useAuth();
  const { cartCounter } = useCart();

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [setToken]);
  useEffect(() => {
    console.log("Counter has changed: ", cartCounter);
  }, [cartCounter]);
  return (
    <nav className="flex items-center justify-between p-6 relative z-20">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-16 md:max-w-20" />
        </Link>
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggle}
          className="flex items-center px-3 py-2 rounded ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#E6BBFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "fixed top-0 right-0 w-2/4 md:w-1/4 h-full bg-purple-900 border-l-4 border-soft-purple z-10 flex flex-col justify-center items-center transition-transform transform translate-x-0"
            : "fixed top-0 right-0 w-2/4 md:w-1/4 h-full  z-10 flex flex-col justify-center items-center transition-transform transform translate-x-full lg:translate-x-0 lg:relative lg:flex lg:w-auto lg:bg-transparent"
        }`}>
        <div className="absolute top-4 right-4 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center px-3 py-2 border rounded text-soft-purple border-soft-purple hover:text-main-purple hover:border-main-purple">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path d="M10 8.586l-4.95-4.95-1.414 1.414L8.586 10l-4.95 4.95 1.414 1.414L10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center lg:flex-row lg:gap-3 justify-center text-soft-purple text-lg">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>

          {token ? (
            <li>
              <Link href="/profile">
                <Image src={profile} alt="Profile pic" width={30} />
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </li>
          )}
          {token ? (
            <li>
              <Link href="/cart">
                <div className="relative">
                  <div className="bg-main-purple -top-1 -right-2 absolute w-4 h-4 p-1 rounded-[100%] ">
                    <p className="absolute -top-0.5 text-sm">{cartCounter}</p>
                  </div>
                  <Image src={cart} alt="Cart pic" width={24} />
                </div>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
