import {useState} from 'react'

export function usePostEmail(url, username, password) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  async function postEmail(email) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
        body: JSON.stringify(email),
      });
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    }
  }

  return [response, error, postEmail];
}