import type InitializeContentRequestedAction from "../actions/InitializeContentRequestedAction";
import ActionType from "../ActionType";

export default function initializeContentRequested(): InitializeContentRequestedAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_REQUESTED,
  };
}
