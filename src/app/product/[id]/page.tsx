import Product from "@/components/Product/Product";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <Product id={params.id} />;
};

export default page;
