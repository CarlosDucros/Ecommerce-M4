import { ReactNode } from "react";

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface IOrder {
  id?: number;
  status: string;
  date: Date;
  userId: number;
  products: IProduct[];
}

export interface ICategory {
  name: string;
}

export interface ICredential {
  id: number;
  password: string;
}

export interface DropdownProps {
  products: IProduct[];
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface IRegisterFormErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
}

export interface ILoginFormErrors {
  email?: string;
  password?: string;
}

enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: Role;
  credential: ICredential;
  orders: IOrder[];
}

export interface IAuthContext {
  token: string;
  setToken: (token: string) => void;
  userData: IUser | null;
  setUserData: (userData: IUser | null) => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface ICartContext {
  cart: IProduct[];
  setCart: (cart: IProduct[]) => void;
  cartRemover: (productId: number) => void;
  cartClearer: () => void;
  cartCounter: number;
  setCartCounter: (cartCounter: number) => void;
}

export interface ICartProviderProps {
  children: ReactNode;
}

export interface ICartButtonProps {
  product: IProduct;
}

export interface DeleteButtonProps {
  id: number;
}

export interface IProductProps {
  id: string;
}
export interface IUserNoCredentials {
  [item: string]: string;
}
