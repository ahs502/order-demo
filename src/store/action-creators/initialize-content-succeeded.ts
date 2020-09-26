import type Content from "../../models/Content";
import type Transaction from "../../models/Transaction";
import type { InitializeContentSucceededAction } from "../Action";
import ActionType from "../ActionType";

export default function initializeContentSucceeded(
  content: Content,
  transactions: readonly Transaction[]
): InitializeContentSucceededAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_SUCCEEDED,
    content,
    transactions,
  };
}
