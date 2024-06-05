"use client";

import { IAuthContext, IAuthProviderProps, IUser } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageToken: string = localStorage.getItem("token");
      const storageUser: string = localStorage.getItem("user");
      if (storageToken && storageUser) {
        const parsedUser = JSON.parse(storageUser);
        setToken(storageToken);
        setUserData(parsedUser);
      }
    }
  }, []);
  return (
    <AuthContext.Provider value={{ token, setToken, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context: IAuthContext = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
