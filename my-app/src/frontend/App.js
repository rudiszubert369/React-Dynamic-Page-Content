import { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';

function App() {
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

export default App;
