import Page from "../../models/Page";
import PageSelectedAction from "../actions/PageSelectedAction";
import ActionType from "../ActionType";

export default function pageSelectedAction(
  selectedPage: Page
): PageSelectedAction {
  return {
    type: ActionType.PAGE_SELECTED,
    selectedPage,
  };
}
