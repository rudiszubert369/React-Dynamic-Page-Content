import { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom'
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';
import  AppContext  from './AppContext';

function Init() {
  const [activeSections, setActiveSections] = useState(null);
  const { pages, activeId, setActiveId, error, setError } = useContext(AppContext);

  const location = useLocation();
  const url = location.pathname;

  //try to match url with url with api and makes call to get the content based on the id
  //also change page id when the route changes
  useEffect(() => {
    const matchedUrl = pages ? pages.find(item => item.url === url) : null;
      if (matchedUrl && matchedUrl.id !== activeId) {
        setActiveId(matchedUrl.id)
      }
      // if (matchedUrl) {
      //   setError(<h1 style={{ textAlign: 'center' }}>404</h1>);
      // }
  }, [pages, location])

  useEffect(() => {
    if (activeId) {
      fetchAndSetSections()
    }
  }, [activeId])

  //fetches page content based on id
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

  return (
    <div className='App'>
      {error ? error : <WebsiteSections sections={activeSections} />}
    </div>
  );
}

export default Init;
