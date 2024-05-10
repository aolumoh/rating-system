import './css/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(false);

  const closeDialog = () => {
    setVisibility(false);
  }

  const openDialog = () => {
    setVisibility(true);
  }

  return (
    <main>
      <div className='container'>
        <StarRating />
        <button className={isVisible ? 'close' : 'open'}onClick={openDialog}>Open Dialog</button>
        <Dialog 
          className={`dialog ${isVisible ? 'open' : 'close'}`} 
          status={isVisible} 
          closeFunc={closeDialog} />
      </div>
    </main>
  );
}

export default App;
