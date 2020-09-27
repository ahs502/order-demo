import React, { useMemo } from 'react'

import Card from '../../models/Card'
import CardType from '../../models/cards/CardType'

import AttachmentView from '../AttachmentView'
import MarkdownCardBody from './components/MarkdownCardBody'
import TextCardBody from './components/TextCardBody'
import ToDoCardBody from './components/ToDoCardBody'

import './CardView.css'

export interface CardViewProps {
  card: Card
  onChange?(newCard: Card): void
  onRemove?(): void
}

export default function CardView({ card, onChange, onRemove }: CardViewProps) {
  const cardTypeLabel = useMemo(() => {
    switch (card.type) {
      case CardType.TEXT: return 'Text';
      case CardType.MARKDOWN: return 'Markdown';
      case CardType.TODO: return 'To-do';
      default: return ''
    }
  }, [card])

  function handleRemoveAttachment(index: number): void {
    if (!onChange) return

    const newCard: Card = {
      ...card,
      attachments: [...card.attachments.slice(0, index), ...card.attachments.slice(index + 1)]
    }

    onChange(newCard)
  }

  function renderCardBody() {
    switch (card.type) {
      case CardType.TEXT:
        return <TextCardBody card={card} onChange={onChange} />

      case CardType.MARKDOWN:
        return <MarkdownCardBody card={card} onChange={onChange} />

      case CardType.TODO:
        return <ToDoCardBody card={card} onChange={onChange} />

      default:
        return '(Unknown card type)'
    }
  }

  return (
    <div className='CardView-root'>
      <div className='CardView-header'>
        <span className='CardView-type'>{cardTypeLabel} Card</span>
        <button className='CardView-remove' title='Remove this card' onClick={onRemove} data-testid='remove'>Remove</button>
      </div>
      <div className='CardView-main'>
        {renderCardBody()}
      </div>
      {card.attachments.length > 0 && (
        <div className='CardView-attachments'>
          {card.attachments.map((attachment, index) => (
            <AttachmentView key={index} attachment={attachment} onRemove={() => handleRemoveAttachment(index)} />
          ))}
        </div>
      )}
    </div>
  )
}