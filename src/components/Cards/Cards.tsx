import Card from "../Card/Card";
import Link from "next/link";
import { getProducts } from "@/helpers";
import { IProduct } from "@/types";
import React from "react";

const Cards: React.FC = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <div className="container mx-auto mt-4 px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products ? (
          products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card key={product.id} {...product} />
              </Link>
            </div>
          ))
        ) : (
          <p>No hay</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
