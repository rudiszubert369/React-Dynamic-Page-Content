import {useState} from 'react';
import useApi from '../backend/useApi.js';
import Button from './Button.js';
import logo from '../assets/logo.svg';


function Navigation(props) {
  const [activeItem, setActiveItem] = useState('/');
  const menuItems = props.menuItems;

  function transformName(str) {
    //edits url string to get a menu item name. Removes '/' from first character and capitalizes
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
    <header>
      <nav className='nav' aria-label='Main navigation menu'>
        <ul>
          {menuItems.map((item) => {
            if (item.url === '/') {
              return (
                <li className='nav__logo' key={item.id}>
                  <a href='/'>
                    <img
                      onClick={() => handleClick(item.id)}
                      href='/'
                      alt='Logo'
                      src={logo}
                      width='89'
                      height='32'
                    />
                  </a>
                </li>
              );
            } else {
              return (
                <li className='nav__item' key={item.id}>
                  <a href={item.url} onClick={() => handleClick(item.id)}>{transformName(item.url)}</a>
                </li>
              );
            }
          })}
        </ul>
        <Button className='nav_button'>Contact us</Button>
      </nav>
    </header>
  );
}

export default Navigation
