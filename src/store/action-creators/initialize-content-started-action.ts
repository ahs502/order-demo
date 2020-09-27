import InitializeContentStartedAction from "../actions/InitializeContentStartedAction";
import ActionType from "../ActionType";

export default function initializeContentStartedAction(): InitializeContentStartedAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_STARTED,
  };
}
