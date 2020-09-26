import InitializeContentFailedAction from "./actions/InitializeContentFailedAction";
import InitializeContentRequestedAction from "./actions/InitializeContentRequestedAction";
import InitializeContentSucceededAction from "./actions/InitializeContentSucceededAciton";

type Action =
  | InitializeContentRequestedAction
  | InitializeContentSucceededAction
  | InitializeContentFailedAction;

export default Action;
