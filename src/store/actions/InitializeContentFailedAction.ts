import type ActionType from "../ActionType";
import type BaseAction from "./BaseAction";

export default interface InitializeContentFailedAction
  extends BaseAction<ActionType.INITIALIZE_CONTENT_FAILED> {
  readonly error: any;
}
