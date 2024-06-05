import dotenv from "dotenv";
dotenv.config();

export const NEXT_PUBLIC_API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/";
