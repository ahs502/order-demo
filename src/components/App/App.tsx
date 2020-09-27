import React from 'react';
import './App.css';

import generateDummyData from '../../helpers/generate-dummy-data';
import PageView from '../PageView';

const page = generateDummyData.page()

export default function App() {
  return (
    <div className="App-root">
      <header className="App-header">
        Order Demo
        &nbsp;&mdash;&nbsp;&nbsp;
        <small>Source code: <a href='https://github.com/ahs502/order-demo' target='_blank'>https://github.com/ahs502/order-demo</a></small>
      </header>
      <div className='App-body'>
        <PageView page={page} onAddCard={newCard => console.log('add card', newCard)} onEditCard={(cardIndex, newCard) => console.log('edit card', cardIndex, newCard)} onRemoveCard={index => console.log('remove card', index)} />
      </div>
    </div>
  );
}
