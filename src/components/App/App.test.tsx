import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './App';

import generateDummyData from '../../helpers/generate-dummy-data';
import selectPage from '../../store/action-creators/select-page';

var MockPageView: jest.Mock
import '../PageView';
jest.mock('../PageView', () => ({
  __esModule: true,
  default: MockPageView = jest.fn(() => null)
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
      store.clearActions()
      const element = getByTestId(`page-selector-for-id-${page.id}`)
      element.click()
      const action = store.getActions()[0]
      expect(action).toEqual(selectPage(page))
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
