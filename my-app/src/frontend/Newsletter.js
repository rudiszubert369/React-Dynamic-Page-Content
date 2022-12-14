import logo from './logo.svg';
import './App.css';


import { Form, Input } from 'react-bootstrap';

function NewsletterSubscription() {
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Input type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="submit">
        <Form.Label>Submit</Form.Label>
        <Input type="submit" value="Subscribe" />
      </Form.Group>
    </Form>
  );
}

export default App;
