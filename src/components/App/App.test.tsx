import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './App';

import generateDummyData from '../../helpers/generate-dummy-data';
import pageSelectedAction from '../../store/action-creators/page-selected-action';

var MockPageView: jest.Mock
import '../PageView';
jest.mock('../PageView', () => ({
  __esModule: true,
  default: MockPageView = jest.fn(() => null)
}))

var mockSelectPage: jest.Mock
import '../../store/async-action-creators/select-page';
jest.mock('../../store/async-action-creators/select-page', () => ({
  __esModule: true,
  default: mockSelectPage = jest.fn(() => ({ type: null }))
}))

const mockStore = configureStore([reduxThunk])

describe('App component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('It should display the current user name', () => {
    const state = generateDummyData.state()
    const store = mockStore(state)

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const element = getByTestId('current-user-name')

    expect(element.textContent).toBe(state.currentUser.name)
  })

  test('It should allow the user to select between pages', () => {
    const state = generateDummyData.state()
    const store = mockStore(state)

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    state.content.pages.forEach(page => {
      const element = getByTestId(`page-selector-for-id-${page.id}`)
      element.click()
      expect(mockSelectPage).toHaveBeenCalledWith(page)
    })
  })

  test('It should render the selected page', () => {
    const state = generateDummyData.state()
    const store = mockStore(state)
    MockPageView.mockImplementationOnce(() => <div data-testid='dummy-page-view' />)

    const { queryByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const element = queryByTestId('dummy-page-view')

    expect(element).toBeInTheDocument()
    expect(MockPageView).toHaveBeenCalledWith(expect.objectContaining({ page: state.selectedPage }), expect.anything())
  })
})
