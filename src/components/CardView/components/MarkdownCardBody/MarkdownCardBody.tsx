import React, { useState } from 'react'
import classNames from 'classnames';

import MarkdownCard from '../../../../models/cards/MarkdownCard';

import './MarkdownCardBody.css'

export interface MarkdownCardBodyProps {
  card: MarkdownCard,
  onChange?(newCard: MarkdownCard): void
}

export default function MarkdownCardBody({ card, onChange }: MarkdownCardBodyProps) {
  const [editMode, setEditMode] = useState(false)
  const [markdown, setMarkdown] = useState(card.markdown)

  function handleChangeMarkdown(): void {
    setEditMode(false)

    if (!onChange) return

    const newCard: MarkdownCard = {
      ...card,
      markdown
    }

    onChange(newCard)
  }

  return (
    <div className={classNames('MarkdownCardBody-root', {
      'MarkdownCardBody-root-view-mode': !editMode,
      'MarkdownCardBody-edit-mode': editMode
    })}>
      {!editMode && (
        <>
          <div className='MarkdownCardBody-markdown'>
            <strong>[MARKDOWN]: %(%</strong>
            {card.markdown}
            <strong>%)%</strong>
          </div>
          &nbsp;&nbsp;
          <button className='MarkdownCardBody-edit' title='Edit this card' onClick={() => {
            setMarkdown(card.markdown)
            setEditMode(true)
          }}>Edit</button>
        </>
      )}
      {editMode && (
        <>
          <input className='MarkdownCardBody-input' value={markdown} onChange={event => setMarkdown(event.target.value)} />
          &nbsp;&nbsp;
          <button className='MarkdownCardBody-apply' onClick={handleChangeMarkdown}>Apply</button>
          <button className='MarkdownCardBody-cancel' onClick={() => setEditMode(false)}>Cancel</button>
        </>
      )}
    </div>
  )
}