import AppProvider from './AppProvider';
import { BrowserRouter } from 'react-router-dom';
import Init from './Init.js';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Init />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;