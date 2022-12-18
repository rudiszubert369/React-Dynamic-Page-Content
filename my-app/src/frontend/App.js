import { BrowserRouter } from 'react-router-dom';
import Init from './Init.js';
import AppContext  from './AppContext';
import fetchData from '../backend/fetchData.js';
import { useState, useEffect } from 'react';

function App() {

  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [error, setError] = useState(null);

  // initial fetch pages and update state
  useEffect(() => {
    fetchAndSetPages();
  }, []);

  async function fetchAndSetPages() {
    try {
      const fetchedData = await fetchData();
      setPages(fetchedData);
    } catch (error) {
      setError(<h1 style={{ textAlign: 'center' }}>Error loading data</h1>);
    }
  }

  const value = {
    pages,
    activeId,
    setActiveId,
    error,
    setError
  };


  return (
    <AppContext.Provider value={value}>
      <BrowserRouter>
        <Init />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;