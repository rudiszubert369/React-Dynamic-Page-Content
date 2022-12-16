import { useState, useEffect } from 'react';

function useApi(){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://adchitects-cms.herokuapp.com/pages', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      }
    })
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(data => setData(data));
  }, []);

  return data;
};

export default useApi