import { usePostEmail } from '../backend/usePostEmail.js';
import React from 'react';
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
    <section className='newsletter' aria-label='Sign up for our newsletter'>
      <form onSubmit={handleSubmit} className='newsletter__form'>
        <label>
          Type your email
          <input name='email' type='email' className='newsletter__input' />
        </label>
        <Button type='submit'>Submit</Button>
        {response && <p>{response.message}</p>}
        {error && <p>Error: {error.message}</p>}
      </form>
    </section>
  );
}

export default Newsletter;