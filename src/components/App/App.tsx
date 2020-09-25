import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import localForage from 'localforage'

function App() {
  const [n, setN] = useState(0)

  useEffect(() => {
    localForage.getItem<number>('n').then(n => setN(n || 0))
  }, [])

  useEffect(() => {
    localForage.setItem('n', n)
  }, [n])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button onClick={() => setN(n + 1)}>{n}++</button>
        </div>
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
