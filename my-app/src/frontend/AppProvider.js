import { useState, useEffect } from 'react';
import fetchData from '../backend/fetchData.js';
import AppContext  from './AppContext';

function AppProvider({ children }) {
  const [pages, setPages] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeSections, setActiveSections] = useState(null);
  const [error, setError] = useState(null);

  // fetch data and update state
  useEffect(() => {
    async function fetchAndSetPages() {
      try {
        const fetchedData = await fetchData();
        setPages(fetchedData);
      } catch (error) {
        setError(<h1 style={{ textAlign: 'center' }}>Error loading data</h1>);
      }
    }
    fetchAndSetPages();
  }, []);

  const value = {
    pages,
    setPages,
    activeId,
    setActiveId,
    activeSections,
    setActiveSections,
    error,
    setError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;