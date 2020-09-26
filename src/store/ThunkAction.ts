import type { ThunkAction as OriginalThunkAction } from "redux-thunk";

import type State from "./State";
import type Action from "./Action";

type ThunkAction<ReturnType = void> = OriginalThunkAction<
  ReturnType,
  State,
  unknown,
  Action
>;

export default ThunkAction;
