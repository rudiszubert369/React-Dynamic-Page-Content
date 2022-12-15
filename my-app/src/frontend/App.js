import './App.css';
import useApi from '../backend/useApi.js';
import Navigation from './Navigation.js'
import WebsiteSections from './WebsiteSections.js';
import React, {useState, useEffect} from 'react';


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
    if (activeId) {
      fetch("https://adchitects-cms.herokuapp.com/page/" + activeId, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
        }
      })
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(data => setActiveContent(data.sections));
    }
  }, [activeId])

  function handleMenuClick(id) {
    setActiveId(id);
  }

  function handleCurrentPageId() {
    const url = window.location.pathname;
    const matchedUrl = apiPages.find(item => item.url === url);
    setActiveId(matchedUrl.id);
  }






  return (
    <div className="App">
      <Navigation onMenuClick={handleMenuClick} menuItems={apiPages} />
      <WebsiteSections sections={activeContent} />
    </div>
  );
}

export default App;
