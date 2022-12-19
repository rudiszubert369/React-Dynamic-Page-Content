import { useContext } from 'react';
import  AppContext  from './AppContext.js';

function Error() {
  const { error } = useContext(AppContext);

  return (
    <div className='App'>
      {error}
    </div>
  );
}

export default Error;