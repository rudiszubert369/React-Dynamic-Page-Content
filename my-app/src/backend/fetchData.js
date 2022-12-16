async function fetchData(id = null) {
  try {
    const URL = 'https://adchitects-cms.herokuapp.com/';
    let apiUrl;
    id ? apiUrl = URL + 'page/' + id : apiUrl = URL + 'pages';

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('adchitects:jsrulezzz')
      }
    });
    const data = await response.text();
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;