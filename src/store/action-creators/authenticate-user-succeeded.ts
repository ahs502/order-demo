import type User from "../../models/User";
import type AuthenticateUserSucceededAction from "../actions/AuthenticateUserSucceededAction";
import ActionType from "../ActionType";

export default function authenticateUserSucceeded(
  currentUser: User
): AuthenticateUserSucceededAction {
  return {
    type: ActionType.AUTHENTICATE_USER_SUCCEEDED,
    currentUser,
  };
}
