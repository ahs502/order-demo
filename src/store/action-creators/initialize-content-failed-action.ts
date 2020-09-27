import InitializeContentFailedAction from "../actions/InitializeContentFailedAction";
import ActionType from "../ActionType";

export default function initializeContentFailedAction(
  error: any
): InitializeContentFailedAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_FAILED,
    error,
  };
}
