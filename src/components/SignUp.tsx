// src/components/SignUp.tsx
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useAuthContext } from "../hooks/useAuth.tsx";

export default function SignUp() {
  const { signUp } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="auth-error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

