import type ActionType from "../ActionType";
import type BaseAction from "./BaseAction";

export default interface AuthenticateUserRequestedAction
  extends BaseAction<ActionType.AUTHENTICATE_USER_REQUESTED> {
  // No payload
}
