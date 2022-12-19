import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import WebsiteContent from './WebsiteContent.js';
import fetchData from '../backend/fetchData.js';
import  AppContext  from './AppContext.js';
import  Error from './Error.js';


function Init() {
  const [activeSections, setActiveSections] = useState(null);
  const { pages, activeId, setActiveId, error, setError } = useContext(AppContext);

  const location = useLocation();
  const activeUrl = location.pathname;

  //try to match current location url with url in pages api.
  //if successful changes activeId which triggers seconds useEffect downloading and setting sections
  //it fires when initial pages list is updated and current location url change
  useEffect(() => {
    const matchedUrl = pages ? pages.find(item => item.url === activeUrl) : null;
      if (matchedUrl && matchedUrl.id !== activeId) {
        setActiveId(matchedUrl.id);
      }
      if (!matchedUrl && pages) { //handle error if pages are fetched and current url is not found
        setError(<h1 style={{ textAlign: 'center' }}>404</h1>);
      }
  }, [pages, activeUrl])

  //fetches and sets website content on activeId state change
  useEffect(() => {
    if (activeId) {
      async function fetchAndSetSections() {
        try {
          const fetchedData = await fetchData(activeId);
          setActiveSections(fetchedData.sections);
        } catch (error) {
          setError(<h1 style={{ textAlign: 'center' }}>Error loading data</h1>);
        }
      }
      fetchAndSetSections();
    }
  }, [activeId])

  return (
    <div className='App'>
      {error ? <Error /> : <WebsiteContent sections={activeSections} />}
    </div>
  );
}

export default Init;