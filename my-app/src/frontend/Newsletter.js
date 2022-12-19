import { useState } from 'react';
import { usePostEmail } from '../backend/usePostEmail.js';
import Button from './Button.js';

function Newsletter() {
  const [response, error, postEmail] = usePostEmail(
    'https://adchitects-cms.herokuapp.com/newsletter',
    'adchitects',
    'jsrulezzz'
  );
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    if (isEmailValid) {
      postEmail({ email: email });
      setEmail('');
    }
  }

  // basic email validation
  function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  }

  return (
    <section className='container' aria-label='Sign up for our newsletter'>
      <div className='newsletter'>
        <h3 className='newsletter__heading'>Sign up for our Newsletter</h3>
        <form onSubmit={handleSubmit} className='newsletter__form'>
          <label className='visually-hidden'>Type your email</label>
          <input
            name='email'
            type='email'
            placeholder='Type your email'
            className='newsletter__input'
            aria-label='Newsletter email input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type='submit'>Submit</Button>
        </form>
        {emailError && <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>{emailError}</p>}
        {response && (
          <p style={{ color: '#5EDC4B', fontSize: '14px', textAlign: 'center' }}>{response.message}</p>
        )}
        {error && (
          <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>Error: {error.message}</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
