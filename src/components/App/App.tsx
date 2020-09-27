import React from 'react';
import './App.css';

import AttachmentView from '../AttachmentView';
import CardView from '../CardView';
import CardType from '../../models/cards/CardType';

function App() {
  return (
    <div className="App-root">
      <header className="App-header">
        Order Demo
        &nbsp;&mdash;&nbsp;&nbsp;
        <small>Source code: <a href='https://github.com/ahs502/order-demo'>https://github.com/ahs502/order-demo</a></small>
      </header>
      <div className='App-body'>
        <AttachmentView attachment={{ type: 'audio', name: 'My audio', url: 'https://google.com' }}
          onRemove={() => console.log('remove')} />
        <CardView card={{
          type: CardType.TEXT,
          attachments: [
            { type: 'audio', name: 'My audio', url: 'https://google.com' },
            { type: 'image', name: 'My image', url: 'https://google.com' },
            { type: 'video', name: 'My video with a long name', url: 'https://google.com' },
            { type: 'file', name: 'My file', url: 'https://google.com' },
            { type: 'audio', name: 'My audio', url: 'https://google.com' },
            { type: 'image', name: 'My image', url: 'https://google.com' },
            { type: 'video', name: 'My video with a long name', url: 'https://google.com' },
            { type: 'file', name: 'My file', url: 'https://google.com' },
          ],
          text: 'My text card'
        }} onChange={x => console.log('change', x)} onRemove={() => console.log('remove')} />
        <CardView card={{
          type: CardType.MARKDOWN,
          attachments: [
            { type: 'audio', name: 'My audio', url: 'https://google.com' },
            { type: 'image', name: 'My image', url: 'https://google.com' },
          ],
          markdown: 'My markdown card'
        }} onChange={x => console.log('change', x)} onRemove={() => console.log('remove')} />
        <CardView card={{
          type: CardType.TODO,
          attachments: [],
          label: 'My to-do card',
          checked: true
        }} onChange={x => console.log('change', x)} onRemove={() => console.log('remove')} />
      </div>
    </div>
  );
}

export default App;
