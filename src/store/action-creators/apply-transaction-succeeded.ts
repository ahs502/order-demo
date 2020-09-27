import ApplyTransactionSucceededAction from "../actions/ApplyTransactionSucceededAction";
import ActionType from "../ActionType";

export default function applyTransactionSucceeded(): ApplyTransactionSucceededAction {
  return {
    type: ActionType.APPLY_TRANSACTION_SUCCEEDED,
  };
}
