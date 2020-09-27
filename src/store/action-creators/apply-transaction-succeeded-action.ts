import ApplyTransactionSucceededAction from "../actions/ApplyTransactionSucceededAction";
import ActionType from "../ActionType";

export default function applyTransactionSucceededAction(): ApplyTransactionSucceededAction {
  return {
    type: ActionType.APPLY_TRANSACTION_SUCCEEDED,
  };
}
