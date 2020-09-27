import State, { ContentInitializationStatus } from "./State";
import Action from "./Action";
import initialState from "./initial-state";
import ActionType from "./ActionType";

import reduceContentWithTransactions from "../helpers/reduce-content-with-transactions";
import reduceContentWithTransaction from "../helpers/reduce-content-with-transaction";

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case ActionType.INITIALIZE_CONTENT_STARTED: {
      return {
        ...state,
        contentInitializationStatus: ContentInitializationStatus.INITIALIZING,
        contentInitializationError: null,
      };
    }

    case ActionType.INITIALIZE_CONTENT_SUCCEEDED: {
      const content = reduceContentWithTransactions(
        action.content || state.content,
        action.transactions || []
      );
      const selectedPage =
        content.pages.find(({ id }) => id === action.selectedPageId) ||
        content.pages[0];

      return {
        ...state,
        contentInitializationStatus: ContentInitializationStatus.INITIALIZED,
        content,
        selectedPage,
      };
    }

    case ActionType.INITIALIZE_CONTENT_FAILED: {
      return {
        ...state,
        contentInitializationStatus:
          ContentInitializationStatus.FAILED_TO_BE_INITIALIZED,
        contentInitializationError: action.error,
      };
    }

    case ActionType.APPLY_TRANSACTION_STARTED: {
      return {
        ...state,
        applyingTransaction: action.transaction,
      };
    }

    case ActionType.APPLY_TRANSACTION_SUCCEEDED: {
      const content = reduceContentWithTransaction(
        state.content,
        state.applyingTransaction!
      );
      const selectedPage =
        content.pages[state.content.pages.indexOf(state.selectedPage)] ||
        content.pages[0];

      return {
        ...state,
        content,
        selectedPage,
        applyingTransaction: null,
      };
    }

    case ActionType.APPLY_TRANSACTION_FAILED: {
      return {
        ...state,
        applyingTransaction: null,
      };
    }

    case ActionType.PAGE_SELECTED: {
      return {
        ...state,
        selectedPage: action.selectedPage,
      };
    }

    default:
      // typeof action should be never at this point.
      return state;
  }
}
