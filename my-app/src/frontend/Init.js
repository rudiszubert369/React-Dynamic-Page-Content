import { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom'
import WebsiteContent from './WebsiteContent.js';
import fetchData from '../backend/fetchData.js';
import  AppContext  from './AppContext';

function Init() {
  const [activeSections, setActiveSections] = useState(null);
  const { pages, activeId, setActiveId, error, setError } = useContext(AppContext);

  const location = useLocation();
  const url = location.pathname;

  //try to match url with url with api and makes call to get the content based on the id
  //also change page id when the route changes(for example user clicks back button)
  useEffect(() => {
    const matchedUrl = pages ? pages.find(item => item.url === url) : null;
      if (matchedUrl && matchedUrl.id !== activeId) {
        setActiveId(matchedUrl.id);
      }
      if (!matchedUrl && pages) { //handle error if pages are fetched and current url is not found
        setError(<h1 style={{ textAlign: 'center' }}>404</h1>);
      }
  }, [pages, location])


  //fetches and sets website content on activeId state change
  useEffect(() => {
    if (activeId) {
      fetchAndSetSections();
    }
  }, [activeId])

  async function fetchAndSetSections() {
    try {
      const fetchedData = await fetchData(activeId);
      setActiveSections(fetchedData.sections);
    } catch (error) {
      setError(<h1 style={{ textAlign: 'center' }}>Error loading data</h1>);
    }
  }


  return (
    <div className='App'>
      {error ? error : <WebsiteContent sections={activeSections} />}
    </div>
  );
}

export default Init;