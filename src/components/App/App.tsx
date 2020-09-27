import React, { useEffect } from 'react';
import classNames from 'classnames';

import Card from '../../models/Card';
import Page from '../../models/Page';
import TransactionType from '../../models/transactions/TransactionType';

import useTypedDispatch from '../../hooks/use-typed-dispatch';
import useTypedSelector from '../../hooks/use-typed-selector';
import applyTransaction from '../../store/async-action-creators/apply-transaction';
import initializeContent from '../../store/async-action-creators/initialize-content';
import selectPage from '../../store/async-action-creators/select-page';
import getAllPages from '../../store/selectors/get-all-pages';
import getCurrentUser from '../../store/selectors/get-current-user';
import getSelectedPage from '../../store/selectors/get-selected-page';
import isContentInitializing from '../../store/selectors/is-content-initializing';
import isTransacting from '../../store/selectors/is-transacting';

import PageView from '../PageView';

import './App.css';

export default function App() {
  const contentIsInitializing = useTypedSelector(isContentInitializing)
  const currentUser = useTypedSelector(getCurrentUser)
  const transacting = useTypedSelector(isTransacting)
  const pages = useTypedSelector(getAllPages)
  const selectedPage = useTypedSelector(getSelectedPage)

  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(initializeContent())
  }, [])

  async function handleSelectPage(page: Page): Promise<void> {
    const done = await dispatch(selectPage(page))
  }
  function handleAddCard(newCard: Card): void {
    dispatch(applyTransaction({
      type: TransactionType.CardTransactionType.INSERT_CARD,
      timeStamp: Date.now(),
      pageId: selectedPage.id,
      card: newCard
    }))
  }
  function handleEditCard(index: number, newCard: Card): void {
    dispatch(applyTransaction({
      type: TransactionType.CardTransactionType.EDIT_CARD,
      timeStamp: Date.now(),
      pageId: selectedPage.id,
      index,
      card: newCard
    }))
  }
  function handleRemoveCard(index: number): void {
    dispatch(applyTransaction({
      type: TransactionType.CardTransactionType.DELETE_CARD,
      timeStamp: Date.now(),
      pageId: selectedPage.id,
      index
    }))
  }

  if (contentIsInitializing) return (
    <p>Initializing, please wait...</p>
  )

  return (
    <div className="App-root">
      <header className="App-header">
        Order Demo
        &nbsp;&mdash;&nbsp;&nbsp;
        <small>Source code: <a href='https://github.com/ahs502/order-demo' target='_blank'>https://github.com/ahs502/order-demo</a></small>
      </header>
      <div className='App-body'>
        <h1 className='App-current-user'>
          Hello, <em data-testid='current-user-name'>{currentUser.name}</em>!
          {transacting && <span className='App-loading'>&nbsp;&nbsp;&nbsp;Please wait...</span>}
        </h1>
        <div className='App-page-selectors'>
          <p>Select your page:</p>
          {pages.map(page => (
            <button
              key={page.id}
              className={classNames('App-page-selector', page === selectedPage && 'App-page-selector-highlighted')}
              onClick={() => handleSelectPage(page)}
              data-testid={`page-selector-for-id-${page.id}`}
            >
              {page.name}
            </button>
          ))}
        </div>
        <PageView
          page={selectedPage}
          onAddCard={handleAddCard}
          onEditCard={handleEditCard}
          onRemoveCard={handleRemoveCard}
        />
      </div>
    </div>
  );
}
