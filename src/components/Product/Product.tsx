/* eslint-disable @next/next/no-img-element */
import { getProduct } from "@/helpers";
import { CartButton } from "../CartButton/CartButton";
import Link from "next/link";
import { IProductProps } from "@/types";
const Product: React.FC<IProductProps> = async ({ id }) => {
  const product = await getProduct(Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className=" md:w-2/3 relative flex flex-col lg:flex-row my-10 rounded-tr-xl rounded-bl-xl  border-soft-purple border-l-4  bg-main-purple items-center  mx-5 md:mx-auto p-10 ">
      <Link href="/products">
        <svg
          className="absolute top-0 left-0 mt-5 ml-5"
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24">
          <path
            fill="#E6BBFF"
            d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
          />
        </svg>
      </Link>
      <img
        src={product.image}
        alt={product.name}
        className="md:max-w-96 pr-10"
      />

      <div className="flex flex-col mt-5 items-baseline">
        <h1 className="text-soft-purple font-bold text-3xl">{product.name}</h1>
        <p className="mt-5 font-medium text-soft-purple">
          Description: <br />
          {product.description}
        </p>
        <p className="mt-2 text-soft-purple">Stock: {product.stock}</p>
        <span className="text-dark-purple font-extrabold">
          Price: ${product.price}
        </span>
        <CartButton product={product} />
      </div>
    </div>
  );
};

export default Product;
