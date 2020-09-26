import { Action as ReduxAction } from "redux";

import type Content from "../models/Content";
import type Transaction from "../models/Transaction";

import type ActionType from "./ActionType";

type Action =
  | InitializeContentRequestedAction
  | InitializeContentSucceededAction
  | InitializeContentFailedAction;

export default Action;

type BaseAction<T extends ActionType> = ReduxAction<T>;

export interface InitializeContentRequestedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_REQUESTED> {
  // No payload
}
export interface InitializeContentSucceededAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_SUCCEEDED> {
  readonly content: Content;
  readonly transactions: readonly Transaction[];
}
export interface InitializeContentFailedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_FAILED> {
  readonly error: any;
}
