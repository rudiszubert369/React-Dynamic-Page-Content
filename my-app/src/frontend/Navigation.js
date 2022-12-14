import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import useApi from '../backend/useApi.js';

function Navigation() {
  const [activeItem, setActiveItem] = useState("home");
  const menuItems = useApi();

  function editName(str) {
    //edits url string to get a menu item name. Removes "/" from first character and capitalizes
    return str.substring(1, 2).toUpperCase() + str.substring(2);
  }

  if (!menuItems) {
    return null
  }
  // Spinner?


  return (
    <Navbar>

    <Nav className="mr-auto">
      {menuItems.map((item) => {
        if (item.url === '/') {
          return (
            <Navbar.Brand href="/" key={item.id}>
              <img
                alt="Logo"
                src="logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          );
        } else {
          const name = item.url
          return (
            <Nav.Link href={item.url} key={item.id}>{editName(name)}</Nav.Link>
          );
        }
      })}
    </Nav>

    </Navbar>
  );
}

export default Navigation
