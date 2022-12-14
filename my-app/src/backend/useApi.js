import { useState, useEffect } from 'react';

const useApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://adchitects-cms.herokuapp.com/', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      },
      mode: 'no-cors'
    })
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(data => setData(data));
  }, []);

  console.log(data)
  return data;
};

export default useApi