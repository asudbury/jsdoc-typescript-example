/**
 @module Pages
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';

/**

    The main function for the React App component.
    @returns {JSX.Element} The JSX element representing the App component.
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
