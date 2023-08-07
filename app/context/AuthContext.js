'use client'
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  const googleSignOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [user]);

  return (
  <AuthContext.Provider value={{user, googleSignIn, googleSignOut }}>
    {children}
  </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}