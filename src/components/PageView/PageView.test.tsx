import React from 'react'
import { render } from '@testing-library/react'

import PageView from './PageView'
import { CardViewProps } from '../CardView/CardView'

import generateDummyData from '../../helpers/generate-dummy-data'

var MockCardView: jest.Mock
import '../CardView'
jest.mock('../CardView', () => ({
  __esModule: true,
  default: MockCardView = jest.fn(() => null)
}))

// var MockApplyTransaction: jest.Mock
// import '../../store/async-action-creators/apply-transaction'
// jest.mock('../../store/async-action-creators/apply-transaction', () => ({
//   __esModule: true,
//   default: MockApplyTransaction = jest.fn(() => { })
// }))

describe('PageView component', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test('It should display the page name', () => {
    const page = generateDummyData.page()

    const { getByTestId } = render(<PageView page={page} />)
    const element = getByTestId('name')

    expect(element.textContent).toBe(page.name)
  })

  test('It should display the owner name', () => {
    const page = generateDummyData.page()

    const { getByTestId } = render(<PageView page={page} />)
    const element = getByTestId('owner-name')

    expect(element.textContent).toBe(page.owner.name)
  })

  test('It should render CardView component for all its cards', () => {
    const page = generateDummyData.page()
    page.cards.forEach((card, index) => {
      MockCardView.mockImplementationOnce(() => <div data-testid={`id-${index}`} />)
    })

    const { queryByTestId } = render(<PageView page={page} />)

    page.cards.forEach((card, index) => {
      expect(MockCardView).toHaveBeenCalledWith(expect.objectContaining({ card }), expect.anything())

      const element = queryByTestId(`id-${index}`)
      expect(element).toBeInTheDocument()
    })
  })

  test('It should provide a way to insert a new card', () => {
    const page = generateDummyData.page()
    const handleAddCard = jest.fn()

    const { getByTestId } = render(<PageView page={page} onAddCard={handleAddCard} />)
    const element = getByTestId('add-new-card')
    element.click()

    expect(handleAddCard).toHaveBeenCalledTimes(1)
  })

  test('It should provide a way to edit existing cards', () => {
    const page = generateDummyData.page()
    page.cards.forEach((card, index) => {
      MockCardView.mockImplementationOnce(({ card, onChange }: CardViewProps) => (
        <div data-testid={`id-${index}`} onClick={() => onChange!(card)} />
      ))
    })
    const handleEditCard = jest.fn()

    const { getByTestId } = render(<PageView page={page} onEditCard={handleEditCard} />)

    page.cards.forEach((card, index) => {
      const element = getByTestId(`id-${index}`)
      element.click()
      expect(handleEditCard).toHaveBeenCalledWith(index, expect.objectContaining(card))
    })
  })

  test('It should provide a way to remove existing cards', () => {
    const page = generateDummyData.page()
    page.cards.forEach((card, index) => {
      MockCardView.mockImplementationOnce(({ card, onRemove }: CardViewProps) => (
        <div data-testid={`id-${index}`} onClick={() => onRemove!()} />
      ))
    })
    const handleRemoveCard = jest.fn()

    const { getByTestId } = render(<PageView page={page} onRemoveCard={handleRemoveCard} />)

    page.cards.forEach((card, index) => {
      const element = getByTestId(`id-${index}`)
      element.click()
      expect(handleRemoveCard).toHaveBeenCalledWith(index)
    })
  })
})