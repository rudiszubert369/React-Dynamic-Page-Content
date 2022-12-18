import  AppContext  from './AppContext';
import { useContext } from 'react';


function Error() {
  const { error } = useContext(AppContext);

  return (
    <div className='App'>
      {error}
    </div>
  );
}

export default Error;