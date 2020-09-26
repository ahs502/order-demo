import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

export default interface InitializeContentFailedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_FAILED> {
  readonly error: any;
}
