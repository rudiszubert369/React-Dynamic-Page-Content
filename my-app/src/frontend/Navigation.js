import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Button from './Button.js';
import logo from '../assets/logo.svg';
import  AppContext  from './AppContext';

function Navigation(props) {
  const { pages, setActiveId } = useContext(AppContext);

  //edits url string to get a menu item name. Removes '/' from first character and capitalizes
  function transformName(str) {
    return str.substring(1, 2).toUpperCase() + str.substring(2);
  }

  if (!pages) {
    return null
  }

  return (
    <header>
      <nav className='nav' aria-label='Main navigation menu'>
        <ul>
          {pages.map((item) => {
            if (item.url === '/') {
              return (
                <li className='nav__logo' key={item.id} onClick={() => setActiveId(item.id)}>
                  <Link to={item.url}>
                    <img
                      alt='Logo'
                      src={logo}
                      width='89'
                      height='32'
                    />
                  </Link>
                </li>
              );
            } else {
              return (
                <li className='nav__item' key={item.id} onClick={() => setActiveId(item.id)}>
                  <Link to={item.url}>{transformName(item.url)}</Link>
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

