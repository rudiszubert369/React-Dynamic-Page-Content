import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import useApi from '../backend/useApi.js';
import './Navigation.css';
import Button from './Button.js';


function Navigation(props) {
  const [activeItem, setActiveItem] = useState("/");
  const menuItems = props.menuItems;

  function transformName(str) {
    //edits url string to get a menu item name. Removes "/" from first character and capitalizes
    return str.substring(1, 2).toUpperCase() + str.substring(2);
  }

  function handleClick(id, url) {
    setActiveItem(url);
    props.onMenuClick(id);
  }

  if (!menuItems) {
    return null
  }

  return (
    <nav bg="light" expand="lg">
      {menuItems.map((item) => {
        if (item.url === '/') {
          return (
            <img
              onClick={() => handleClick(item.id)}
              key={item.id}
              href={'/'}
              alt="Logo"
              src="../../logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          );
        } else {
          return (
            <a key={item.id} href={item.url} onClick={() => handleClick(item.id)}>{transformName(item.url)}</a>
          );
        }
      })}
      <Button>Contact us</Button>
    </nav>
  );
}

export default Navigation
