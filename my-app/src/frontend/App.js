import { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import WebsiteSections from './WebsiteSections.js';
import fetchData from '../backend/fetchData.js';

function App() {
  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

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

  function fetchAndSetContent() {
    // async function fetchContent() {
    //   const fetchedData = await fetchData(activeId);
    //   setActiveContent(fetchedData.sections);
    //   console.log(fetchedData.sections);
    // }
    // fetchContent();

    async function fetchSections() {
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
          console.log(parsedData.sections);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSections()
  }

  function handleMenuClick(id) {
    setActiveId(id);
    fetchAndSetContent();
  }

  function handleCurrentPageId() {
    const url = window.location.pathname;
    const matchedUrl = pages.find(item => item.url === url);
    setActiveId(matchedUrl.id);
    fetchAndSetContent();
  }

  return (
    <div className='App'>
      <Navigation onMenuClick={handleMenuClick} menuItems={pages} />
      <WebsiteSections sections={activeContent} />
    </div>
  );
}

export default App;


// import {useState, useEffect} from 'react';
// import Navigation from './Navigation.js'
// import WebsiteSections from './WebsiteSections.js';
// import fetchData from '../backend/fetchData.js';
//
//
// function App() {
//   const [pages, setPages] = useState(null);
//   const [activeId, setActiveId] = useState(null);
//   const [activeContent, setActiveContent] = useState(null);
//
//
//   useEffect(() => {
//     async function fetchAndSetPages() {
//       const fetchedData = await fetchData();
//       setPages(fetchedData);
//     }
//     fetchAndSetPages();
//   }, []);
//
//   useEffect(() => {
//     if (pages) {
//       handleCurrentPageId();
//     }
//   }, [pages])
//
//   useEffect(() => {
//     async function fetchSections() {
//       try {
//         if (activeId) {
//           const response = await fetch('https://adchitects-cms.herokuapp.com/page/' + activeId, {
//             method: 'GET',
//             headers: {
//               'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
//             }
//           });
//           const data = await response.text();
//           const parsedData = JSON.parse(data);
//           setActiveContent(parsedData.sections);
//           console.log(parsedData.sections);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchSections()
//     // async function fetchAndSetContent() {
//     //   const fetchedData = await fetchData(activeId);
//     //   setActiveContent(fetchedData.sections);
//     //   console.log(fetchedData.sections);
//     //
//     // }
//     // fetchAndSetContent()
//
//   }, [activeId]);
//
//   function handleMenuClick(id) {
//     setActiveId(id);
//   }
//
//   function handleCurrentPageId() { //matches url with pathname and sets active Id from api that corresponds to url
//     const url = window.location.pathname;
//     const matchedUrl = pages.find(item => item.url === url);
//     setActiveId(matchedUrl.id);
//   }
//
//   return (
//     <div className='App'>
//       <Navigation onMenuClick={handleMenuClick} menuItems={pages} />
//       <WebsiteSections sections={activeContent} />
//     </div>
//   );
// }
//
// export default App;
