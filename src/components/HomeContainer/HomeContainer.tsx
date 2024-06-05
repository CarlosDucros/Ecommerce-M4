/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import celphone from "@/assets/Celphone.png";
import sales from "@/assets/Sales.png";
import Link from "next/link";

const HomeContainer: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-cover bg-center bg-[url('../assets/Decorators.png')]">
        <div className="flex items-center mb-16">
          <div className="flex flex-col flex-grow mx-10 md:mx-60">
            <h1 className="my-16 text-main-purple z-10 text-5xl">
              Welcome to <span className="font-bold">Best Friend</span>
            </h1>
            <p className="text-soft-purple z-10">
              At Best Friend, we are committed to providing you with the latest
              and most innovative technology products. Our mission is to make
              your life easier and more enjoyable by offering a wide range of
              high-quality gadgets and accessories. Whether you're looking for
              the newest smartphone, cutting-edge smart home devices, or stylish
              wearables, we've got you covered.
            </p>
          </div>
          <div className="ml-auto hidden lg:block">
            <Image
              src={celphone}
              alt="Celphone"
              className="max-w-96 animate-slideInFromRight"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mb-10 md:max-w-[60%]">
        <Image src={sales} alt="Sales banner" className="w-full" />
      </div>
      <div className="text-center mx-10 md:mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-4 text-main-purple">
          Explore Our Best Deals
        </h2>
        <p className="text-lg text-soft-purple">
          Don't miss out on our exclusive sales and discounts! Discover amazing
          offers on a wide range of tech products, from smartphones and laptops
          to gaming consoles and accessories. Whether you're upgrading your
          current devices or treating yourself to something new, our unbeatable
          deals make it easy to stay ahead of the curve.
        </p>
        <p className="text-lg text-soft-purple mt-2">
          You can see all our products{" "}
          <Link className="text-main-purple font-bold" href="/products">
            {" "}
            here
          </Link>
          !
        </p>
      </div>
    </div>
  );
};

export default HomeContainer;
