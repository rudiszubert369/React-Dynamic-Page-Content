import { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';

function Init() {
  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeSections, setActiveSections] = useState(null);
  const [error, setError] = useState(null);


  //initial fetch of all Pages
  useEffect(() => {
    async function fetchAndSetPages() {
      const fetchedData = await fetchData();
      setPages(fetchedData);
    }
    fetchAndSetPages();
  }, []);

  //once the pages are fetched it matches url location with id in pages and fetches sections
  useEffect(() => {
    if (pages) {
      const url = window.location.pathname;
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
      const fetchedData = await fetchData(activeId);
      setActiveSections(fetchedData.sections);
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
