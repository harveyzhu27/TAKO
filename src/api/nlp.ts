import { getIdToken } from "./lists";

const API_URL = import.meta.env.VITE_API_URL;

export async function parseText(text: string) {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/nlp/parse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`NLP parse failed: ${res.status} ${error}`);
  }
  return res.json();
}