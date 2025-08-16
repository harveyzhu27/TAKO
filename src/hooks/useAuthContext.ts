import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// Convenience hook to consume the context from components:
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
