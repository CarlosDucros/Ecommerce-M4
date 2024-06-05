"use client";
import React from "react";
import Image from "next/image";
import Register from "../Register/Register";
import signUpImg from "@/assets/SignUpImg.png";
import Link from "next/link";
import { motion } from "framer-motion";

const RegisterContainer: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-10 h-fit ">
      <div className="bg-dark-purple z-10 flex items-center justify-center shadow-[10px_0px_4px_0px_rgba(0,0,0,0.25)] md:w-2/5 ">
        <Image
          src={signUpImg}
          alt="Man in a laptop"
          className="w-2/3 m-5 md:m-0 max-w-44 lg:max-w-96"
        />
      </div>
      <div className="bg-main-purple md:w-2/4 lg:w-1/4 relative">
        <motion.div
          className="bg-dark-purple my-4 hidden md:block  z-10 shadow-[2px_6px_4px_rgba(0,0,0,0.25)] rounded-r-lg p-2 w-fit message-div"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "easeIn", duration: 0.8 }}>
          <h1 className="text-soft-purple font-medium md:text-2xl">
            Hi! First time here?
          </h1>
        </motion.div>
        <h1 className="text-center m-10 font-bold text-2xl lg:text-5xl text-soft-purple">
          Register
        </h1>
        <Register />
        <p className="text-center text-soft-purple pb-10">
          Have you already created an account?
          <br />
          <Link
            href="/register"
            className=" text-purple-950 font-bold text-center hover:text-soft-purple">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterContainer;
