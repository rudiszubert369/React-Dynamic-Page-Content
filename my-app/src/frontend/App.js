import './App.css';
import useApi from '../backend/useApi.js';

function App() {



  // const data = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{useApi()}</p>
          Learn React
      </header>
    </div>
  );
}

export default App;
