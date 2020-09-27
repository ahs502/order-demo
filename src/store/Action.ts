import InitializeContentFailedAction from "./actions/InitializeContentFailedAction";
import InitializeContentStartedAction from "./actions/InitializeContentStartedAction";
import InitializeContentSucceededAction from "./actions/InitializeContentSucceededAciton";

type Action =
  | InitializeContentStartedAction
  | InitializeContentSucceededAction
  | InitializeContentFailedAction;

export default Action;
