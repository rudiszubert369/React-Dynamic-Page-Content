import { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';
import { useContext } from 'react';
import  AppContext  from './AppContext';
import {useLocation, Link} from 'react-router-dom'


function Init() {
  const { pages, setPages, activeId, setActiveId, activeSections, setActiveSections, error, setError } = useContext(AppContext);

  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    if (pages) {
      const matchedUrl = pages.find(item => item.url === url);
      if (matchedUrl) {
        setActiveId(matchedUrl.id);
        fetchAndSetSections();
      } else {
        //error handling if url doesn't match api
        setError(<h1 style={{ textAlign: 'center' }}>404</h1>);
      }
    }
  }, [pages])

  function fetchAndSetSections() {
    async function fetchSections() {
      try {
        const fetchedData = await fetchData(activeId);
        setActiveSections(fetchedData.sections);
      } catch (error) {
        setError(<h1 style={{ textAlign: 'center' }}>Error loading data</h1>);
      }
    }
    fetchSections();
  }

  function handleMenuClick(id) {
    setActiveId(id);
    fetchAndSetSections();
  }

  return (
    <div className='App'>
      <Navigation onMenuClick={handleMenuClick} menuItems={pages} />
      {error ? error : <WebsiteSections sections={activeSections} />}
    </div>
  );
}

export default Init;
