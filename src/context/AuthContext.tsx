import { User } from "firebase/auth";
import React, { ReactNode, createContext, useContext } from "react";

interface ContextType{
    googleSignIn : () => void;
    user : User | null;
    logOut : () => void
}

export const AuthContext = createContext<ContextType>({} as ContextType);


export const userAuth = () => {
    return useContext(AuthContext);
};


