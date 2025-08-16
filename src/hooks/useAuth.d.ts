import { User } from "firebase/auth";

export function useAuthContext(): {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<unknown>;
  signIn: (email: string, password: string) => Promise<unknown>;
  logOut: () => Promise<void>;
};