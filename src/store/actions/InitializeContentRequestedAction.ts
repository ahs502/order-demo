import type ActionType from "../ActionType";
import type BaseAction from "./BaseAction";

export default interface InitializeContentRequestedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_REQUESTED> {
  // No payload
}
