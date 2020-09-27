import Transaction from "../../models/Transaction";
import ApplyTransactionStartedAction from "../actions/ApplyTransactionStartedAction";
import ActionType from "../ActionType";

export default function applyTransactionStartedAction(
  transaction: Transaction
): ApplyTransactionStartedAction {
  return {
    type: ActionType.APPLY_TRANSACTION_STARTED,
    transaction,
  };
}
