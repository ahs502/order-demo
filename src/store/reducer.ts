import type State from "./State";
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
        contentInitializationStatus: "initializing",
        contentInitializationError: null,
      };

    case ActionType.INITIALIZE_CONTENT_SUCCEEDED:
      return {
        ...state,
        contentInitializationStatus: "initialized",
        content: reduceContentWithTransactions(
          action.content,
          action.transactions
        ),
      };

    case ActionType.INITIALIZE_CONTENT_FAILED:
      return {
        ...state,
        contentInitializationStatus: "failed to be initialized",
        contentInitializationError: action.error,
      };

    default:
      return state;
  }
}
