import './App.css';
import useApi from '../backend/useApi.js';
import useApiPage from '../backend/useApiPages.js';
import Navigation from './Navigation.js'
import React, {useState} from 'react';


function App() {
  const [activeItem, setActiveItem] = useState("/");

  function handleMenuClick(item) {
    setActiveItem(item);
  }


// const navItems = useApi();
// console.log(navItems);
// const pageUrls = navItems ? navItems.map(function(obj) {
//   return obj.url;
// }) : null;
//
//
// const pageIds = navItems ? navItems.map(function(obj) {
//   return obj.id;
// }) : null;

// const pageContent = [];

// if (pageIds) {
//   pageIds.forEach((item) => {
//     pageContent.push(useApiPages(item))
//   });
// }


  // const data = useFetchData();

  return (
    <div className="App">
      <Navigation onMenuClick={handleMenuClick}/>
    </div>
  );
}

export default App;
