import { useState, useEffect } from 'react';
import fetchData from './fetchData.js'

function useApi(){
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAndSetData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }

    fetchAndSetData();
  }, []);

  return data;
};

export default useApi