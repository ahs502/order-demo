import type AuthenticateUserRequestedAction from "../actions/AuthenticateUserRequestedAction";
import ActionType from "../ActionType";

export default function authenticateUserRequested(): AuthenticateUserRequestedAction {
  return {
    type: ActionType.AUTHENTICATE_USER_REQUESTED,
  };
}
