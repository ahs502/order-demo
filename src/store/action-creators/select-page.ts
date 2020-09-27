import Page from "../../models/Page";
import SelectPageAction from "../actions/SelectPageAction";
import ActionType from "../ActionType";

export default function selectPage(selectedPage: Page): SelectPageAction {
  return {
    type: ActionType.SELECT_PAGE,
    selectedPage,
  };
}
