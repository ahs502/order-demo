import State, { ContentInitializationStatus } from "./State";
import type Action from "./Action";
import initialState from "./initial-state";
import ActionType from "./ActionType";

import reduceContentWithTransactions from "../helpers/reduce-content-with-transactions";

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case ActionType.INITIALIZE_CONTENT_REQUESTED:
      return {
        ...state,
        contentInitializationStatus: ContentInitializationStatus.INITIALIZING,
        contentInitializationError: null,
      };

    case ActionType.INITIALIZE_CONTENT_SUCCEEDED:
      return {
        ...state,
        contentInitializationStatus: ContentInitializationStatus.INITIALIZED,
        content: reduceContentWithTransactions(
          action.content || state.content,
          action.transactions || []
        ),
      };

    case ActionType.INITIALIZE_CONTENT_FAILED:
      return {
        ...state,
        contentInitializationStatus:
          ContentInitializationStatus.FAILED_TO_BE_INITIALIZED,
        contentInitializationError: action.error,
      };

    default:
      return state;
  }
}
