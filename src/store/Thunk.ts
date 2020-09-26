import type {
  ThunkAction as OriginalThunkAction,
  ThunkDispatch as OriginalThunkDispatch,
} from "redux-thunk";

import type State from "./State";
import type Action from "./Action";

export type ThunkAction<ReturnType = void> = OriginalThunkAction<
  ReturnType,
  State,
  unknown,
  Action
>;

export type ThunkDispatch = OriginalThunkDispatch<State, unknown, Action>;
