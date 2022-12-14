import './App.css';
import useApi from '../backend/useApi.js';
import useApiPage from '../backend/useApiPage.js';

function App() {


const navItems = useApi();
console.log(navItems);
// var pageNames = navItems.map(function(obj) {
//   return obj.name;
// });
//
// var pageIds = navItems.map(function(obj) {
//   return obj.id;
// });

// console.log(pageNames);
// console.log(pageIds);


  // const data = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
