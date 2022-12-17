import Init from './Init.js';

function App() {
  return (
    <div>
      <Init />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';

function Init() {
  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeSections, setActiveSections] = useState(null);

  useEffect(() => {
    async function fetchAndSetPages() {
      const fetchedData = await fetchData();
      setPages(fetchedData);
    }
    fetchAndSetPages();
  }, []);

  useEffect(() => {
    if (pages) {
      handleCurrentPageId();
    }
  }, [pages])

  function fetchAndSetSections() {
    async function fetchSections() {
      const fetchedData = await fetchData(activeId);
      setActiveSections(fetchedData.sections);
    }
    fetchSections();
  }

  function handleMenuClick(id) {
    setActiveId(id);
    fetchAndSetSections();
  }

  function handleCurrentPageId() {
    const url = window.location.pathname;
    const matchedUrl = pages.find(item => item.url === url);
    setActiveId(matchedUrl.id);
    fetchAndSetSections();
  }

  return (
    <div className='App'>
      <Navigation onMenuClick={handleMenuClick} menuItems={pages} />
      <WebsiteSections sections={activeSections} />
    </div>
  );
}

export default Init;


import Button from './Button.js';
import logo from '../assets/logo.svg';


function Navigation(props) {
  const menuItems = props.menuItems;

  function transformName(str) {
    //edits url string to get a menu item name. Removes '/' from first character and capitalizes
    return str.substring(1, 2).toUpperCase() + str.substring(2);
  }

  //lifts the id of clicked nav element to the parent component
  function handleClick(id) {
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


async function fetchData(id = null) {
  try {
    const URL = 'https://adchitects-cms.herokuapp.com/';
    let apiUrl;
    id ? apiUrl = URL + 'page/' + id : apiUrl = URL + 'pages';

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      }
    });
    const data = await response.text();
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;


import Newsletter from './Newsletter.js'
import Hero from './Hero.js'
import Testimonial from './Testimonial.js'

function WebsiteSections(props) {
  const sections = props.sections;

  if (!Array.isArray(sections)) {
    return null;
  }

  if (sections) {
    return (
      <main>
        {sections.map(section => {
          switch (section.type) {
            case 'hero':
              return <Hero key={section.type} text={section.text} img={section.img} />;
            case 'newsletter':
              return <Newsletter key={section.type} />;
            case 'testimonial':
              return <Testimonial key={section.type} text={section.text} author={section.author} />;
            default:
              return null;
          }
        })}
      </main>
    );
  }
}

export default WebsiteSections
