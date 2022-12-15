import { usePostEmail } from '../backend/usePostEmail.js';
import React from 'react';
import './Newsletter.css';
import Button from './Button.js'


function Newsletter() {
  const [response, error, postEmail] = usePostEmail(
    'https://adchitects-cms.herokuapp.com/newsletter',
    'adchitects',
    'jsrulezzz'
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { email } = event.target.elements;
    postEmail({ email: email.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input name="email" type="email" />
      </label>
      <Button type={"submit"}>Submit</Button>
      {response && <p>{response.message}</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default Newsletter;