import React from 'react';
import { render } from '@testing-library/react';

import CardView from './CardView'
import { AttachmentViewProps } from '../AttachmentView/AttachmentView';

import generateDummyData from '../../helpers/generate-dummy-data';

var MockAttachmentView: jest.Mock
import '../AttachmentView'
jest.mock('../AttachmentView', () => ({
  __esModule: true,
  default: MockAttachmentView = jest.fn(() => null)
}))

var MockTextCardBody: jest.Mock
import './components/TextCardBody'
jest.mock('./components/TextCardBody', () => ({
  __esModule: true,
  default: MockTextCardBody = jest.fn(() => null)
}))

var MockMarkdownCardBody: jest.Mock
import './components/MarkdownCardBody'
jest.mock('./components/MarkdownCardBody', () => ({
  __esModule: true,
  default: MockMarkdownCardBody = jest.fn(() => null)
}))

var MockToDoCardBody: jest.Mock
import './components/ToDoCardBody'
jest.mock('./components/ToDoCardBody', () => ({
  __esModule: true,
  default: MockToDoCardBody = jest.fn(() => null)
}))

describe('CardView component', () => {
  test('It should render all the card attachments', () => {
    const card = generateDummyData.card()
    MockAttachmentView.mockImplementation(({ attachment }: AttachmentViewProps) => <div data-testid={`id-${attachment.name}`} />)

    const { queryByTestId } = render(<CardView card={card} />)

    card.attachments.forEach(attachment => {
      const element = queryByTestId(`id-${attachment.name}`)

      expect(element).toBeInTheDocument()
    })
  })

  test('It should provide a way to remove the card', () => {
    const card = generateDummyData.card()
    const handleRemove = jest.fn()

    const { getByTestId } = render(<CardView card={card} onRemove={handleRemove} />)
    const element = getByTestId('remove')
    element.click()

    expect(handleRemove).toBeCalledTimes(1)
  })

  test('It should render TextCardBody with card and onChange props for text cards', () => {
    const card = generateDummyData.textCard()
    const onChange = generateDummyData.function()
    MockTextCardBody.mockImplementationOnce(() => <div data-testid='card-body' />)

    const { queryByTestId } = render(<CardView card={card} onChange={onChange} />)
    const element = queryByTestId('card-body')

    expect(element).toBeInTheDocument()
    expect(MockTextCardBody).toHaveBeenCalledWith(expect.objectContaining({ card, onChange }), expect.anything())
  })

  test('It should render MarkdownBody with card and onChange props for markdown cards', () => {
    const card = generateDummyData.markdownCard()
    const onChange = generateDummyData.function()
    MockMarkdownCardBody.mockImplementationOnce(() => <div data-testid='card-body' />)

    const { queryByTestId } = render(<CardView card={card} onChange={onChange} />)
    const element = queryByTestId('card-body')

    expect(element).toBeInTheDocument()
    expect(MockMarkdownCardBody).toHaveBeenCalledWith(expect.objectContaining({ card, onChange }), expect.anything())
  })

  test('It should render ToDoCardBody with card and onChange props for to-do cards', () => {
    const card = generateDummyData.toDoCard()
    const onChange = generateDummyData.function()
    MockToDoCardBody.mockImplementationOnce(() => <div data-testid='card-body' />)

    const { queryByTestId } = render(<CardView card={card} onChange={onChange} />)
    const element = queryByTestId('card-body')

    expect(element).toBeInTheDocument()
    expect(MockToDoCardBody).toHaveBeenCalledWith(expect.objectContaining({ card, onChange }), expect.anything())
  })
})