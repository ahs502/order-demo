import ApplyTransactionFailedAction from "./actions/ApplyTransactionFailedAction";
import ApplyTransactionStartedAction from "./actions/ApplyTransactionStartedAction";
import ApplyTransactionSucceededAction from "./actions/ApplyTransactionSucceededAction";
import InitializeContentFailedAction from "./actions/InitializeContentFailedAction";
import InitializeContentStartedAction from "./actions/InitializeContentStartedAction";
import InitializeContentSucceededAction from "./actions/InitializeContentSucceededAciton";
import SelectPageAction from "./actions/SelectPageAction";

type Action =
  | InitializeContentStartedAction
  | InitializeContentSucceededAction
  | InitializeContentFailedAction
  | ApplyTransactionStartedAction
  | ApplyTransactionSucceededAction
  | ApplyTransactionFailedAction
  | SelectPageAction;

export default Action;
