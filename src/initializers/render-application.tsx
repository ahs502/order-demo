import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

export default function renderApplication(): void {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}