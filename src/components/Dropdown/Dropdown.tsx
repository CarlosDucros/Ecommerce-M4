/* eslint-disable @next/next/no-img-element */
import { DropdownProps } from "@/types";
import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown: FC<DropdownProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 1 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className="bg-main-purple flex justify-center w-full"
          onClick={toggleDropdown}>
          <svg
            className={`${isOpen ? "rotate-180" : ""} transition`}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24">
            <path
              fill="#E6BBFF"
              d="m12 15.632l8.968-4.748l-.936-1.768L12 13.368L3.968 9.116l-.936 1.768z"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:w-[30rem] "
            role="menu"
            aria-orientation="vertical"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}>
            <motion.div
              className="flex flex-col "
              role="none"
              variants={containerVariants}>
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="text-soft-purple border h-[8rem] border-dark-purple justify-evenly items-center px-4 py-2 text-md flex bg-main-purple "
                  variants={itemVariants}>
                  <img
                    className="max-w-[20%]"
                    src={product.image}
                    alt={product.name}
                  />
                  <div>
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
