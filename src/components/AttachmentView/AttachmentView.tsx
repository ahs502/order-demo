import React from 'react'

import Attachment from '../../models/Attachment';

import './AttachmentView.css'

export interface AttachmentViewProps {
  attachment: Attachment,
  onRemove?(): void
}

export default function AttachmentView({ attachment, onRemove }: AttachmentViewProps) {
  return (
    <div className='AttachmentView-root'>
      <a className='AttachmentView-link' href={attachment.url} target='_blank' data-testid='link' >
        <span className='AttachmentView-type'>{attachment.type}:&nbsp;</span>
        <span className='AttachmentView-name' data-testid='name'>{attachment.name}</span>
      </a>
      <button className='AttachmentView-remove' title='Remove this attachment' onClick={onRemove} data-testid='remove'>Remove</button>
    </div>
  )
}