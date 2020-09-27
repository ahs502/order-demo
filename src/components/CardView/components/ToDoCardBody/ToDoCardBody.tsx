import classNames from 'classnames';
import React, { useState } from 'react'

import ToDoCard from '../../../../models/cards/ToDoCard';

import './ToDoCardBody.css'

export interface ToDoCardBodyProps {
  card: ToDoCard,
  onChange?(newCard: ToDoCard): void
}

export default function ToDoCardBody({ card, onChange }: ToDoCardBodyProps) {
  const [editMode, setEditMode] = useState(false)
  const [label, setText] = useState(card.label)

  function handleChangeChecked(checked: boolean): void {
    if (!onChange) return

    const newCard: ToDoCard = {
      ...card,
      checked
    }

    onChange(newCard)
  }

  function handleChangeLabel(): void {
    setEditMode(false)

    if (!onChange) return

    const newCard: ToDoCard = {
      ...card,
      label
    }

    onChange(newCard)
  }

  return (
    <div className={classNames('ToDoCardBody-root', {
      'ToDoCardBody-root-view-mode': !editMode,
      'ToDoCardBody-edit-mode': editMode
    })}>
      <input className='ToDoCardBody-checkbox' type='checkbox' checked={card.checked} onChange={event => handleChangeChecked(event.target.checked)} disabled={editMode} />
      &nbsp;&nbsp;
      {!editMode && (
        <>
          <label className='ToDoCardBody-label'>{card.label}</label>
          &nbsp;&nbsp;
          <button className='ToDoCardBody-edit' title='Edit this card' onClick={() => {
            setText(card.label)
            setEditMode(true)
          }}>Edit</button>
        </>
      )}
      {editMode && (
        <>
          <input className='ToDoCardBody-input' value={label} onChange={event => setText(event.target.value)} />
          &nbsp;&nbsp;
          <button className='ToDoCardBody-apply' onClick={handleChangeLabel}>Apply</button>
          <button className='ToDoCardBody-cancel' onClick={() => setEditMode(false)}>Cancel</button>
        </>
      )}
    </div>
  )
}