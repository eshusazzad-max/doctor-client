"use client";

import {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from "firebase/auth";

import app from "@/firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  // Google Login
  const googleLogin = () => {

    setLoading(true);

    return signInWithPopup(auth, googleProvider);

  };

  // Register
  const createUser = async (
    email: string,
    password: string,
    name: string
  ) => {

    setLoading(true);

    const result = await createUserWithEmailAndPassword(

      auth,
      email,
      password

    );

    await updateProfile(result.user, {

      displayName: name,

    });

    return result;

  };

  // Login
  const loginUser = (email: string, password: string) => {

    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);

  };

  // Logout
  const logoutUser = () => {

    setLoading(true);

    return signOut(auth);

  };

  // Current User
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

    return () => unsubscribe();

  }, []);

  // All Values
  const authInfo = {

    user,
    loading,
    googleLogin,
    createUser,
    loginUser,
    logoutUser,

  };

  return (

    <AuthContext.Provider value={authInfo}>

      {children}

    </AuthContext.Provider>

  );

};

export default AuthProvider;