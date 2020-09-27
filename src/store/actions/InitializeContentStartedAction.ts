import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

export default interface InitializeContentStartedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_STARTED> {
  // No payload
}
