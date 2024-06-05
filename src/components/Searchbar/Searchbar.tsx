import { useEffect, useState, useRef } from "react";
import { getProducts } from "@/helpers";
import { IProduct } from "@/types";
import Link from "next/link";
const Searchbar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowResults(true);
  };

  const productFiltered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <input
        onChange={handleChange}
        value={search}
        className="flex placeholder focus:outline-none focus:outline-soft-purple text-soft-purple w-40 md:w-96 max-h-16  py-2 px-4 items-center gap-4 lensIcon bg-main-purple rounded-tr-xl rounded-bl-xl"
        placeholder="Search"
      />
      {showResults && search !== "" && productFiltered.length > 0 && (
        <ul className="bg-main-purple border p-2 rounded-md  border-soft-purple absolute top-full left-0 w-full rounded-b-xl shadow-md mt-n1">
          {productFiltered.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <li
                className="text-soft-purple cursor-pointer hover:bg-dark-purple "
                key={product.id}
                onClick={() => setShowResults(false)}>
                {product.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
