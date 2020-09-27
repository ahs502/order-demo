import React, { useState } from 'react'
import classNames from 'classnames';

import TextCard from '../../../../models/cards/TextCard';

import './TextCardBody.css'

export interface TextCardBodyProps {
  card: TextCard,
  onChange?(newCard: TextCard): void
}

export default function TextCardBody({ card, onChange }: TextCardBodyProps) {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState(card.text)

  function handleChangeText(): void {
    setEditMode(false)

    if (!onChange) return

    const newCard: TextCard = {
      ...card,
      text
    }

    onChange(newCard)
  }

  return (
    <div className={classNames('TextCardBody-root', {
      'TextCardBody-root-view-mode': !editMode,
      'TextCardBody-edit-mode': editMode
    })}>
      {!editMode && (
        <>
          <div className='TextCardBody-text'>{card.text}</div>
          &nbsp;&nbsp;
          <button className='TextCardBody-edit' title='Edit this card' onClick={() => {
            setText(card.text)
            setEditMode(true)
          }}>Edit</button>
        </>
      )}
      {editMode && (
        <>
          <input className='TextCardBody-input' value={text} onChange={event => setText(event.target.value)} />
          &nbsp;&nbsp;
          <button className='TextCardBody-apply' onClick={handleChangeText}>Apply</button>
          <button className='TextCardBody-cancel' onClick={() => setEditMode(false)}>Cancel</button>
        </>
      )}
    </div>
  )
}