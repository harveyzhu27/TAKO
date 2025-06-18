import { User } from "firebase/auth";

export function useAuthContext(): {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<void>;
};