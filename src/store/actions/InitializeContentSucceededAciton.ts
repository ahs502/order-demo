import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

import Content from "../../models/Content";
import Transaction from "../../models/Transaction";

export default interface InitializeContentSucceededAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_SUCCEEDED> {
  readonly content: Content | undefined;
  readonly transactions: readonly Transaction[] | undefined;
  readonly selectedPageId: Id | undefined;
}
