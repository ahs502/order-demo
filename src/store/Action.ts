import AuthenticateUserRequestedAction from "./actions/AuthenticateUserRequestedAction";
import AuthenticateUserSucceededAction from "./actions/AuthenticateUserSucceededAction";
import InitializeContentFailedAction from "./actions/InitializeContentFailedAction";
import InitializeContentRequestedAction from "./actions/InitializeContentRequestedAction";
import InitializeContentSucceededAction from "./actions/InitializeContentSucceededAciton";

type Action =
  | AuthenticateUserRequestedAction
  | AuthenticateUserSucceededAction
  | InitializeContentRequestedAction
  | InitializeContentSucceededAction
  | InitializeContentFailedAction;

export default Action;
