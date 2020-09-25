import type { Action } from "redux";
import type { ThunkAction as OriginalThunkAction } from "redux-thunk";

import type State from "./State";

type ThunkAction<ReturnType = void> = OriginalThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>;

export default ThunkAction;
