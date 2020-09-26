import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

export default interface InitializeContentRequestedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_REQUESTED> {
  // No payload
}
