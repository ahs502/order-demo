import React from 'react';
import { render } from '@testing-library/react';

import AttachmentView from './AttachmentView'

import generateDummyData from '../../helpers/generate-dummy-data';

describe('AttechmentView component', () => {
  test('It should display the attachment name', () => {
    const attachment = generateDummyData.attachment()

    const { getByTestId } = render(<AttachmentView attachment={attachment} />)
    const element = getByTestId('name')

    expect(element.textContent!.includes(attachment.name)).toBeTruthy()
  })

  test('It should provide a way to remove the attachment', () => {
    const attachment = generateDummyData.attachment()
    const handleRemove = jest.fn()

    const { getByTestId } = render(<AttachmentView attachment={attachment} onRemove={handleRemove} />)
    const element = getByTestId('remove')
    element.click()

    expect(handleRemove).toBeCalledTimes(1)
  })

  test('It should provide a way to navigate the browser to the attachment url', () => {
    const attachment = generateDummyData.attachment()

    const { getByTestId } = render(<AttachmentView attachment={attachment} />)
    const element = getByTestId('link')

    expect(element.tagName).toBe('A')
    expect(element.getAttribute('href')).toBe(attachment.url)
  })
})