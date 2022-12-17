import { useState, useEffect } from 'react';
import fetchData from '../backend/fetchData.js';
import AppContext  from './AppContext';

function AppProvider({ children }) {
  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [error, setError] = useState(null);


  // fetch data and update state
  useEffect(() => {
    fetchAndSetPages();
  }, []);

  async function fetchAndSetPages() {
    console.log('setpages');
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
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;