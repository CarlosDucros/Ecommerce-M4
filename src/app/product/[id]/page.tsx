import Product from "@/components/Product/Product";
import React from "react";

const page = ({ params }: any) => {
  return <Product id={params} />;
};

export default page;
