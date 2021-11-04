import React, { Suspense } from 'react';
import './App.css';
import logo from './assets/images/cubicleLogo.svg'

const HomePage = React.lazy(()=> import('./pages/Home/Home') )

function App() {
  return (
    <div className="App">
      <Suspense fallback={
      <div className="loader">
         <img src={logo} alt="logo" className="logo" />
      </div>
      }>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
