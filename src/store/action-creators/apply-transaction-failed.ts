import ApplyTransactionFailedAction from "../actions/ApplyTransactionFailedAction";
import ActionType from "../ActionType";

export default function applyTransactionFailed(
  error: any
): ApplyTransactionFailedAction {
  return {
    type: ActionType.APPLY_TRANSACTION_FAILED,
    error,
  };
}
