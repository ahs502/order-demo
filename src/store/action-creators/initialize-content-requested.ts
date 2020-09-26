import type { InitializeContentRequestedAction } from "../Action";
import ActionType from "../ActionType";

export default function initializeContentRequested(): InitializeContentRequestedAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_REQUESTED,
  };
}
