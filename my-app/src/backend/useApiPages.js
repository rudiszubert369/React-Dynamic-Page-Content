import { useState, useEffect } from 'react';

const useApiPages = () => {
  const [data, setData] = useState(null);
  const URL = 'https://adchitects-cms.herokuapp.com/pages'
  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      }
    })
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(resp => console.log(resp))
    .then(data => setData(data));
  }, []);

  return data;
};

export default useApiPages