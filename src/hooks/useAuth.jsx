// src/hooks/useAuth.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";                      // ← your auth export
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Context object allows u to share data across components without
// having to pass the prop all they way down the tree.
const AuthContext = createContext();

// Provider is a wrapper component that holds the context object
// so any component inside the provider can access this
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // When the component mounts, attach onAuthStateChanged listener:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);   // user is null if signed out, or has {uid, email, etc.}
      setLoading(false);      // we’re done loading initial state - so it doesn't accidently render tasks
    });
    return unsubscribe;       // clean up listener on unmount
  }, []);

  // 3) Expose helper functions for signUp / signIn / signOut:
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  // The value provided to any child via useAuthContext():
  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Don’t render children until we know if a user is signed in or not */}
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 4) Convenience hook to consume the context from components:
export function useAuthContext() {
  return useContext(AuthContext);
}
