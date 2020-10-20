import React, { useState, useEffect, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// import Surprise from './Surprise';
const Surprise = React.lazy(()=> import('./Surprise'));

// import hello from './hello'

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  // useEffect(() => { import('./hello').then(mod => mod.default()) }, [])
  return (
    <div>
      <button onClick={ (env) => setShowSurprise(true) }>Mostrar sorpresa</button>
      {
        showSurprise && <Suspense fallback={ <p>Cargando...</p>}><Surprise /></Suspense>
      }
    </div>
  );
}

export default App;
