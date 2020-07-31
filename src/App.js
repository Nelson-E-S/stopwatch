import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalClock from './component/DigitalClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DigitalClock />
      </header>
    </div>
  );
}

export default App;
