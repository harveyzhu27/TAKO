import React, { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential
} from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

// Context object allows u to share data across components without
// having to pass the prop all they way down the tree.
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Provider is a wrapper component that holds the context object
// so any component inside the provider can access this
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // When the component mounts, attach onAuthStateChanged listener:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);   // user is null if signed out, or has {uid, email, etc.}
      setLoading(false);      // we're done loading initial state - so it doesn't accidently render tasks
    });
    return unsubscribe;       // clean up listener on unmount
  }, []);

  // 3) Expose helper functions for signUp / signIn / signOut:
  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut(): Promise<void> {
    return signOut(auth);
  }

  // The value provided to any child via useAuthContext():
  const value: AuthContextType = {
    currentUser,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Don't render children until we know if a user is signed in or not */}
      {!loading && children}
    </AuthContext.Provider>
  );
}


