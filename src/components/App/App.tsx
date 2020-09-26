import React from 'react';
import './App.css';

import AttachmentView from '../AttachmentView';

function App() {
  return (
    <div className="App-root">
      <header className="App-header">Order Demo</header>
      <div className='App-body'>
        <AttachmentView attachment={{ type: 'audio', name: 'My audio', url: 'https://google.com' }} />
      </div>
    </div>
  );
}

export default App;
