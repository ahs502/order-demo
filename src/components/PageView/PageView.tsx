import React, { useState } from 'react'
import Card from '../../models/Card';
import CardType from '../../models/cards/CardType';

import Page from '../../models/Page';
import CardView from '../CardView';

import './PageView.css'

interface CardTypeSelectOption {
  readonly label: string,
  readonly value: CardType
}
const cardTypeSelectOptions: readonly CardTypeSelectOption[] = [
  {
    label: 'Text',
    value: CardType.TEXT
  },
  {
    label: 'Markdown',
    value: CardType.MARKDOWN
  },
  {
    label: 'To Do',
    value: CardType.TODO
  }
]

export interface PageViewProps {
  page: Page,
  onAddCard?(newCard: Card): void
  onEditCard?(cardIndex: number, newCard: Card): void
  onRemoveCard?(cardIndex: number): void
}

export default function PageView({ page, onAddCard, onEditCard, onRemoveCard }: PageViewProps) {
  const [selectedCardTypeOption, setSelectedCardTypeOption] = useState(cardTypeSelectOptions[0])
  const [text, setText] = useState('')

  function handleAddCard(): void {
    const newCard: Card =
      selectedCardTypeOption.value === CardType.TEXT ?
        {
          type: CardType.TEXT,
          attachments: [],
          text
        } : selectedCardTypeOption.value === CardType.MARKDOWN ?
          {
            type: CardType.MARKDOWN,
            attachments: [],
            markdown: text
          } : {
            type: CardType.TODO,
            attachments: [],
            label: text,
            checked: false
          }

    onAddCard && onAddCard(newCard)
    setText('')
  }

  return (
    <div className='PageView-root'>
      <h1 className='PageView-name' data-testid='name'>{page.name}</h1>
      <h3 className='PageView-owner'>
        Owner:&nbsp;&nbsp;
        <strong data-testid='owner-name'>{page.owner.name}</strong>
      </h3>
      <div className='PageView-form'>
        <select
          className='PageView-select-card-type'
          value={selectedCardTypeOption.value}
          onChange={event => setSelectedCardTypeOption(cardTypeSelectOptions.find(({ value }) => value === event.target.value)!)}
        >
          {cardTypeSelectOptions.map(option => (
            <option className='PageView-select-card-type-option' key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        &nbsp;&nbsp;
        <label>Card text:</label>
        &nbsp;
        <input value={text} onChange={event => setText(event.target.value)} />
        &nbsp;&nbsp;
        <button className='PageView-add-new-card' title='Add a new card' onClick={handleAddCard} data-testid='add-new-card'>Add Card</button>
      </div>
      {page.cards.length === 0 && (
        <p className='PageView-message'>
          There is no card in this page. Start by adding a new card.
        </p>
      )}
      {page.cards.length > 0 && (
        <div className='PageView-cards'>
          {page.cards.map((card, index) => (
            <CardView
              key={index}
              card={card}
              onChange={newCard => onEditCard && onEditCard(index, newCard)}
              onRemove={() => onRemoveCard && onRemoveCard(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}