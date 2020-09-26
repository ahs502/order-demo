import type Content from "../../models/Content";
import type Transaction from "../../models/Transaction";
import type InitializeContentSucceededAction from "../actions/InitializeContentSucceededAciton";
import ActionType from "../ActionType";

export default function initializeContentSucceeded(
  content: Content | undefined,
  transactions: readonly Transaction[] | undefined
): InitializeContentSucceededAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_SUCCEEDED,
    content,
    transactions,
  };
}
