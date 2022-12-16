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
    <section className='container' aria-label='Sign up for our newsletter'>
      <div className='newsletter'>
        <h3 className='newsletter__heading'>Sign up for our Newsletter</h3>
        <form onSubmit={handleSubmit} className='newsletter__form'>
          <label className="visually-hidden">Type your email</label>
          <input
            name='email'
            type='email'
            placeholder="Type your email"
            className='newsletter__input'
            aria-label='Newsletter email input'
          />
          <Button type='submit'>Submit</Button>
        </form>
        {response && <p style={{ color: '#5EDC4B', fontSize:'14px', textAlign:'center' }}>{response.message}</p>}
        {error && <p style={{ color: 'red', fontSize:'14px', textAlign:'center' }}>Error: {error.message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;