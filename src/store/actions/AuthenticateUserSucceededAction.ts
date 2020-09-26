import type ActionType from "../ActionType";
import type BaseAction from "./BaseAction";

import type User from "../../models/User";

export default interface AuthenticateUserSucceededAction
  extends BaseAction<ActionType.AUTHENTICATE_USER_SUCCEEDED> {
  readonly currentUser: User;
}
