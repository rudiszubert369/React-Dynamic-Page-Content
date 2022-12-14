import { useState, useEffect } from 'react';
// import useApiPages from './useApiPages';

const useApiPage = (id) => {
  const [data, setData] = useState(null);
  const URL = 'https://adchitects-cms.herokuapp.com/page/' + id;
  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      }
    })
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(data => setData(data));
  });

  return data;
};

export default useApiPage