import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

export default interface ApplyTransactionSucceededAction
  extends BaseAction<ActionType.APPLY_TRANSACTION_SUCCEEDED> {
  // No payload
}
