import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

import Page from "../../models/Page";

export default interface SelectPageAction
  extends BaseAction<ActionType.SELECT_PAGE> {
  readonly selectedPage: Page;
}
