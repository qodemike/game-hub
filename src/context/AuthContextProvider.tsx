import React, { ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => setUser(result.user));
  };

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
