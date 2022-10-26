import React from 'react';
import './app.css';
import AppHeader from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
