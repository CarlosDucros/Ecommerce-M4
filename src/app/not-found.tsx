import Image from "next/image";
import Link from "next/link";
import notFound from "@/assets/404.png";
export default function NotFound() {
  return (
    <div className="flex flex-col m-5 items-center bg-main-purple h-max p-5">
      <h1 className="text-soft-purple text-5xl my-5">404 Not Found</h1>
      <Image className="max-w-[400px]" src={notFound} alt="404 not found" />
      <Link href="/">
        <h2 className="text-soft-purple text-3xl mt-5 p-3 bg-purple-600 shadow-md shadow-dark-purple">
          Home
        </h2>
      </Link>
    </div>
  );
}
