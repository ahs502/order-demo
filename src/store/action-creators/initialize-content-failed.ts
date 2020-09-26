import type { InitializeContentFailedAction } from "../Action";
import ActionType from "../ActionType";

export default function initializeContentFailed(
  error: any
): InitializeContentFailedAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_FAILED,
    error,
  };
}
