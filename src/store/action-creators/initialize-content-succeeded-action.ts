import Content from "../../models/Content";
import Transaction from "../../models/Transaction";
import InitializeContentSucceededAction from "../actions/InitializeContentSucceededAciton";
import ActionType from "../ActionType";

export default function initializeContentSucceededAction(
  content: Content | undefined,
  transactions: readonly Transaction[] | undefined,
  selectedPageId: Id | undefined
): InitializeContentSucceededAction {
  return {
    type: ActionType.INITIALIZE_CONTENT_SUCCEEDED,
    content,
    transactions,
    selectedPageId,
  };
}
