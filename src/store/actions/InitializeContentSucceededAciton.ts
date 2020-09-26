import type ActionType from "../ActionType";
import type BaseAction from "./BaseAction";

import type Content from "../../models/Content";
import type Transaction from "../../models/Transaction";

export default interface InitializeContentSucceededAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_SUCCEEDED> {
  readonly content: Content | undefined;
  readonly transactions: readonly Transaction[] | undefined;
}
