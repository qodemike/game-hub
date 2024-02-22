import React, { ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
const [userCredentials, setUser] = useState<UserCredential>({} as UserCredential)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => setUser(result) );
  };

  const logOut = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ googleSignIn, userCredentials, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

