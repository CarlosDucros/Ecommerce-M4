import { IOrder, IProduct, IUser } from "@/types";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../../envs";
import { UserLoginDto, UserRegisterDto } from "@/dto/userDto";
import Toastify from "toastify-js";
export const postUserRegister = async (user: UserRegisterDto) => {
  try {
    const response = await axios.post(
      `${NEXT_PUBLIC_API_URL}/users/register`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.data) {
      throw new Error();
    }
    Toastify({
      duration: 2500,
      text: "User created!",
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
      stopOnFocus: true,
    }).showToast();

    return response.data;
  } catch (error: any) {
    Toastify({
      duration: 2500,
      text: error.response.data.message,
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #9d0208,#370617)",
      stopOnFocus: true,
    }).showToast();
    throw new Error(error.message);
  }
};

export const postUserLogin = async (user: UserLoginDto) => {
  try {
    const response = await axios.post(
      `${NEXT_PUBLIC_API_URL}/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    Toastify({
      duration: 2500,
      text: "User loged!",
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
      stopOnFocus: true,
    }).showToast();

    return response.data;
  } catch (error: any) {
    Toastify({
      duration: 2500,
      text: error.response.data.message,
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #9d0208,#370617)",
      stopOnFocus: true,
    }).showToast();
    throw new Error(error.message);
  }
};

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    Toastify({
      duration: 2500,
      text: error.response.data.message,
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #9d0208,#370617)",
      stopOnFocus: true,
    }).showToast();
    throw new Error(error.message);
  }
};

export const getProduct = async (id: number): Promise<IProduct> => {
  try {
    const products: IProduct[] = await getProducts();
    const product: IProduct = products.find((product) => product.id == id);
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const postOrder = async (
  products: number[],
  token: string
): Promise<IOrder> => {
  try {
    let bodyContent = JSON.stringify({ products });

    const response = await fetch(`${NEXT_PUBLIC_API_URL}/orders`, {
      method: "POST",
      cache: "no-cache",
      body: bodyContent,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    } else {
      Toastify({
        duration: 2500,
        text: "Order created!",
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
        stopOnFocus: true,
      }).showToast();
    }

    const result: IOrder = await response.json();

    return result;
  } catch (error: any) {
    Toastify({
      duration: 2500,
      text: error.message,
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #9d0208,#370617)",
      stopOnFocus: true,
    }).showToast();
    throw new Error(error.message);
  }
};

export const getOrders = async (token: string): Promise<IOrder[]> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: token,
      },
    });
    const orders: IOrder[] = await response.json();
    return orders;
  } catch (error) {
    Toastify({
      duration: 2500,
      text: error.response.data.message,
      newWindow: true,
      close: true,
      position: "right",
      gravity: "bottom",
      backgroundColor: "linear-gradient(to right, #9d0208,#370617)",
      stopOnFocus: true,
    }).showToast();
    throw new Error(error.message);
  }
};
