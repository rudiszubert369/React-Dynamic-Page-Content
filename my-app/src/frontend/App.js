import {useState, useEffect} from 'react';
import useApi from '../backend/useApi.js';
import Navigation from './Navigation.js'
import WebsiteSections from './WebsiteSections.js';


function App() {
  const [activeId, setActiveId] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  const apiPages = useApi();

  useEffect(() => {
    if (apiPages) {
      handleCurrentPageId();
    }
  }, [apiPages])

  useEffect(() => {
    async function fetchData() {
      try {
        if (activeId) {
          const response = await fetch('https://adchitects-cms.herokuapp.com/page/' + activeId, {
            method: 'GET',
            headers: {
              'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
            }
          });
          const data = await response.text();
          const parsedData = JSON.parse(data);
          setActiveContent(parsedData.sections);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [activeId]);

  function handleMenuClick(id) {
    setActiveId(id);
  }

  function handleCurrentPageId() { //matches url with pathname and sets active Id from api that corresponds to url
    const url = window.location.pathname;
    const matchedUrl = apiPages.find(item => item.url === url);
    setActiveId(matchedUrl.id);
  }

  return (
    <div className='App'>
      <Navigation onMenuClick={handleMenuClick} menuItems={apiPages} />
      <WebsiteSections sections={activeContent} />
    </div>
  );
}

export default App;
