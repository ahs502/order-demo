import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

import Transaction from "../../models/Transaction";

export default interface ApplyTransactionStartedAction
  extends BaseAction<ActionType.APPLY_TRANSACTION_STARTED> {
  readonly transaction: Transaction;
}
