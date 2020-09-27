import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

export default interface ApplyTransactionFailedAction
  extends BaseAction<ActionType.APPLY_TRANSACTION_FAILED> {
  readonly error: any;
}
